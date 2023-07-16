<script lang="ts">
	import { formatVideoTime } from '$lib/logic/format-time';
	import { isEnter, isSpace } from '$lib/logic/keyboard-utils';
	import { onDestroy, onMount } from 'svelte';
	import PlayButton from '../play-button/PlayButton.svelte';
	import { browser } from '$app/environment';

	const SKIP_TIME = 5;

	export let src: string;
	export let poster: string;
	export let width: number;
	export let height: number;
	export let loop: boolean;

	let container: HTMLDivElement;
	let video: HTMLVideoElement;

	let playing = false;
	let loading = false;
	let currentTime = 0;
	let duration = 0;
	let displayVideo = false;

	const skipBackward = () => {
		currentTime = Math.max(0, currentTime - SKIP_TIME);
	};
	const skipForward = () => {
		currentTime = Math.min(duration, currentTime + SKIP_TIME);
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (isEnter(event)) {
			event.target.click();
		} else if (isSpace(event)) {
			event.preventDefault();
			playing = !playing;
		} else if (event.key === 'ArrowLeft') {
			skipBackward();
		} else if (event.key === 'ArrowRight') {
			skipForward();
		}
	};

	const observer = browser
		? new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							displayVideo = true;
						} else {
							if (video) {
								playing = false;
								loading = false;
								video.addEventListener(
									'error',
									() => {
										displayVideo = false;
									},
									{ once: true }
								);
								video.src = '';
							}
						}
					}
				},
				{ rootMargin: '0px' }
		  )
		: null;

	onMount(() => {
		observer && observer.observe(container);
	});
	onDestroy(() => {
		observer && observer.unobserve(container);
	});

	$: timeLeft = duration - currentTime;
	$: playing = displayVideo && playing;
	$: paused = !playing;
	$: percent = (currentTime / duration) * 98 + 1;
	$: hideOverlay = playing && !loading;

	const startLoading = () => {
		loading = true;
	};
	const stopLoading = () => {
		loading = false;
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	bind:this={container}
	on:click
	on:keydown={handleKeyDown}
	tabindex="0"
	class="player"
	style="aspect-ratio:{width}/{height}"
>
	{#if displayVideo}
		<!-- svelte-ignore a11y-media-has-caption -->
		<video
			{poster}
			{loop}
			{src}
			bind:this={video}
			bind:paused
			bind:currentTime
			bind:duration
			on:waiting={startLoading}
			on:playing={stopLoading}
			on:pause={stopLoading}
			on:ended={() => {
				if (!loop) {
					loading = false;
					playing = false;
				}
			}}
			on:dblclick|stopPropagation|preventDefault={(event) => {
				if (event.offsetX < event.target.clientWidth / 2) {
					skipBackward();
				} else {
					skipForward();
				}
			}}
			preload="metadata"
			style={`aspect-ratio: ${width} / ${height}`}
		/>
		<span class:hide={hideOverlay}>{formatVideoTime(timeLeft)}</span>
		<input
			bind:value={currentTime}
			on:click|stopPropagation={() => {}}
			type="range"
			min={0}
			max={duration}
			step={0.0166666}
			class:hide={hideOverlay}
			style="{`background-image: linear-gradient(90deg, var(--accent) ${percent}%, var(--background-2) ${percent}%);`}}"
		/>
		<PlayButton bind:playing bind:loading class="center" />
	{/if}
</div>

<style>
	div {
		position: relative;
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		grid-template-rows: 1fr auto 1fr;
		z-index: var(--z-media);
		border-radius: var(--border-radius);
	}
	video {
		width: 100%;
		grid-area: 1/1/4/4;
		contain: strict;
		border-radius: var(--border-radius);
	}

	.player :global(.center) {
		z-index: 15;
		grid-area: 2/2/3/3;
	}

	span {
		z-index: 15;
		grid-area: 3/3/4/4;
		place-self: end;
		margin-bottom: 26px;
		margin-inline: 12px;
		font-size: 12px;
		background-color: #0008;
		border-radius: 4px;
		padding: 4px;
		color: white;
	}

	input[type='range'] {
		-webkit-appearance: none;
		height: 26px;
		z-index: 15;
		margin: 0;
		grid-area: 3/1/4/4;
		align-self: flex-end;
		background-clip: content-box;
		padding-block: 12px;
		margin-inline: 12px;
	}

	input[type='range']::-webkit-slider-runnable-track {
		-webkit-appearance: none;
		content: '';
		height: 4px;
	}

	input[type='range']::-moz-range-progress {
		background-color: var(--accent);
	}

	input[type='range']::-ms-fill-lower {
		background-color: var(--accent);
	}

	input[type='range']::-webkit-slider-thumb,
	input[type='range']::-ms-thumb {
		height: 16px;
		width: 16px;
		border-radius: 8px;
		background-color: var(--accent);
	}

	input[type='range']::-moz-range-thumb {
		height: 16px;
		width: 16px;
		border-radius: 8px;
		background-color: var(--accent);
		border: none;
	}

	input[type='range']::-webkit-slider-thumb {
		margin-top: -6px;
	}

	@keyframes fade {
		from {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}

	.hide {
		animation: fade 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		opacity: 0;
	}
</style>