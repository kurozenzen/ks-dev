<script lang="ts">
	import { base } from '$app/paths';
	import { clickOnEnter } from '$lib/logic/keyboard-utils';
	import { postobserve } from '$lib/logic/use/postobserve';
	import highResolutionEnabled from '$lib/store/high-resolution-enabled';

	export let post: kurosearch.Post;

	const ratio = post.width / post.height;
	const expandable = ratio < 0.33;

	let open: boolean;

	$: src = highResolutionEnabled ? post.file_url : post.sample_url;
</script>

<div class:expandable class:open>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<img
		class="post-media"
		loading="lazy"
		data-src={src}
		alt={post.id.toString()}
		style={`aspect-ratio: ${post.width} / ${post.height}`}
		width={post.width}
		height={post.height}
		tabindex="0"
		on:click={() => (open = !open)}
		on:keydown={clickOnEnter}
		on:error|once={(event) => (event.target.src = `${base}/assets/failed-to-load.svg`)}
		use:postobserve
	/>
</div>

<style>
	img {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: contain;
		contain: strict;
		z-index: var(--z-media);
	}

	@container (min-width: 800px) {
		img {
			--radius: calc(2 * var(--border-radius));
			border-radius: var(--radius) var(--radius) 0 0;
		}
	}

	.expandable:not(.open) {
		max-height: 100vh;
		overflow: hidden;
		position: relative;
	}

	.expandable:not(.open)::before {
		position: absolute;
		z-index: 100;
		text-align: center;
		width: 100%;
		content: 'Expand';
		padding: var(--grid-gap);
		background: linear-gradient(0deg, var(--background-0) 0%, transparent 100%);
		user-select: none;
		pointer-events: none;
		bottom: 0;
		color: var(--text-highlight);
	}
</style>
