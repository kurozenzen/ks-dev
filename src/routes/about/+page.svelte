<script lang="ts">
	import { version } from '$app/environment';
	import { base } from '$app/paths';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Heading3 from '$lib/components/pure/heading/Heading3.svelte';
	import IconLink from '$lib/components/pure/icon-link/IconLink.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { onMount } from 'svelte';

	let message = 'Update';

	let latestCommitPromise: Promise<{ sha: string }>;

	const forceUpdate = async () => {
		message = 'Updating...';
		if ('serviceWorker' in navigator) {
			const registrations = await navigator.serviceWorker.getRegistrations();
			await Promise.all(registrations.map((r) => r.update()));
		}
		// @ts-expect-error
		window.location.reload(true);
		message = 'Done';
	};
	onMount(() => {
		latestCommitPromise = fetch(
			'https://api.github.com/repos/kurozenzen/kurosearch/commits/main'
		).then((r) => r.json());
	});
</script>

<svelte:head>
	<title>kurosearch - About</title>
	<meta name="description" content="Further information about the website can be found here." />
</svelte:head>

<div>
	<Heading1>About</Heading1>
	<Heading3>Version</Heading3>
	<section class="info">
		<img src="{base}/favicon.svg" alt="kuroseach logo" />
		<h2>kurosearch</h2>
		<span>
			Version: {version}{#await latestCommitPromise then commit}
				, Newest is: {commit?.sha?.substring(0, 7)}
			{/await}
		</span>
	</section>
	<section class="update">
		<TextButton title="Force an update of the app" on:click={forceUpdate}>{message}</TextButton>
	</section>
	<Heading3>More Info</Heading3>
	<section class="more">
		<IconLink title="Debug Information" className="codicon codicon-link" href="{base}/debug">
			<p>Debug Information</p>
		</IconLink>
		<IconLink
			title="Rule34.xxx URL Comparison"
			className="codicon codicon-link"
			href="{base}/query"
		>
			<p>Rule34.xxx URL Comparison</p>
		</IconLink>
	</section>
</div>

<style>
	div {
		padding-inline: var(--grid-gap);
	}

	.info {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
		justify-content: center;
		padding: var(--grid-gap);
		background-color: var(--background-1);
		border-radius: var(--border-radius);
	}

	.update {
		display: flex;
		justify-content: center;
		padding-block: var(--grid-gap);
	}

	.more {
		display: flex;
		flex-direction: column;
	}
	h2 {
		color: var(--text-highlight);
		align-self: flex-end;
	}

	img {
		width: 60px;
		height: 60px;
		grid-row: span 2;
	}

	p {
		white-space: nowrap;
	}
</style>
