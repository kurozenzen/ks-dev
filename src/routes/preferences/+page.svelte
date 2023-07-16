<script context="module">
	const THEME_OPTIONS = Object.freeze({
		'crimson dark': 'Dark',
		'crimson light': 'Light',
		'hotpink light': 'Bubblegum',
		'crimson coffee': 'Coffee'
	});
</script>

<script>
	import Checkbox from '$lib/components/pure/checkbox/Checkbox.svelte';
	import Heading1 from '$lib/components/pure/heading/Heading1.svelte';
	import Preference from '$lib/components/pure/preference/Preference.svelte';
	import Select from '$lib/components/pure/select/Select.svelte';
	import TextButton from '$lib/components/pure/text-button/TextButton.svelte';
	import { ALL_BLOCKING_GROUPS } from '$lib/logic/blocking-group-data';
	import activeTags from '$lib/store/active-tags-store';
	import blockedContent from '$lib/store/blocked-content-store';
	import localstorageEnabled from '$lib/store/localstorage-enabled-store';
	import results from '$lib/store/results-store';
	import theme from '$lib/store/theme-store';

	const reset = () => {
		localstorageEnabled.reset();
		activeTags.reset();
		results.reset();
		theme.reset();
		blockedContent.reset();
	};
</script>

<section>
	<Heading1>Preferences</Heading1>

	<Preference title="Theme" description="Change the look of the app.">
		<Select bind:value={$theme} options={THEME_OPTIONS} />
	</Preference>

	<Preference title="Save Tags & Posts" description="Save active tags and posts between sessions.">
		<Checkbox id="checkbox-localstorage-enabled" bind:checked={$localstorageEnabled}>
			{$localstorageEnabled ? 'Save' : "Don't save"}
		</Checkbox>
	</Preference>

	<Preference
		title="Blocked Content"
		description="Completely prevent certain types of posts without cluttering your search."
	>
		{#each ALL_BLOCKING_GROUPS as groupName}
			<Checkbox id={`checkbox-${groupName}`} bind:checked={$blockedContent[groupName]}>
				{groupName}
			</Checkbox>
		{/each}
	</Preference>

	<Preference
		title="Reset preferences"
		description="Undo all customizations and return to default settings."
	>
		<TextButton title="Reset preferences" on:click={reset}>Reset</TextButton>
	</Preference>
</section>

<style>
	section {
		padding-inline: 1rem;
	}
</style>