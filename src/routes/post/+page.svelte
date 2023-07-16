<script>
	import { browser } from '$app/environment';
	import Details from '$lib/components/kurosearch/details/Details.svelte';
	import Gif from '$lib/components/kurosearch/media-gif/Gif.svelte';
	import Image from '$lib/components/kurosearch/media-image/Image.svelte';
	import Video from '$lib/components/kurosearch/media-video/Video.svelte';
	import LoadingAnimation from '$lib/components/pure/loading-animation/LoadingAnimation.svelte';
	import { getPost } from '$lib/logic/api-client/posts/posts';

	const url = browser ? new URL(location.href) : undefined;
	const id = url && url.searchParams.has('id') ? Number(url.searchParams.get('id')) : undefined;
</script>

<div>
	{#if id}
		{#await getPost(id)}
			<LoadingAnimation />
		{:then post}
			{#if post.type === 'image'}
				<Image {post} open />
			{:else if post.type === 'video'}
				<Video
					src={post.file_url}
					poster={post.sample_url}
					width={post.width}
					height={post.height}
					loop={post.tags.some((t) => t.name == 'loop')}
				/>
			{:else}
				<Gif {post} />
			{/if}
			<Details {post} />
		{/await}
	{/if}
</div>

<style>
	div {
		background-color: var(--background-1);
		border-radius: var(--border-radius);
	}
</style>