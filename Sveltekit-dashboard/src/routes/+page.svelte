<script lang="ts">
	import DimensionCard from './DimensionCard.svelte';
	import { dimensionList, selectedItem } from '../stores';
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte Measure app" />
</svelte:head>

<div class="hero-content">
	<div class="grid grid-cols-3 gap-8">
		{#each $dimensionList as item}
			<DimensionCard dimension={item} on:click={() => $selectedItem = item} />
		{/each}
	</div>
</div>
