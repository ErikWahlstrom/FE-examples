<script>
	import { selectedItem } from '../../stores';
	import DimensionCard from '../DimensionCard.svelte';
	let modalInput = false;
	let newName = $selectedItem?.name ?? '';
	let newMax = $selectedItem?.max ?? 0;
	const saveValues = () => {
		if ($selectedItem) {
            console.log("newMax", newMax, newName)
			$selectedItem.max = newMax;
			$selectedItem.name = newName;
			modalInput = false;
            console.log("selectedItem", $selectedItem)
		}
	};
</script>

<div>
	{#if $selectedItem !== undefined}
		<div class="hero-content">
			<DimensionCard dimension={$selectedItem} on:click={() => (modalInput = true)} />
		</div>

		<div class="stats shadow">
			{#each $selectedItem.values as value}
				<div class="stat place-items-center">
					<div class="stat-title">Value {2 + 1}</div>
					<div class="stat-value">{value}</div>
					<div class="stat-desc">mm</div>
				</div>
			{/each}
		</div>
	{/if}
	<div>
		<div class="modal {modalInput ? 'modal-open' : ''}">
			<div class="modal-box">
				<div class="form-control w-full max-w-xs">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">New dimension name</span>
					</label>
					<input
						type="text"
						bind:value={newName}
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs"
					/>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">New max value</span>
					</label>
					<input
						type="number"
						bind:value={newMax}
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs"
					/>
					<div class="right-align">
						<button class="btn btn-primary" on:click={() => saveValues()}>Save</button>
						<button class="btn" on:click={() => (modalInput = false)}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.right-align {
		display: flex;
		flex-direction: row-reverse;
		gap: 5px;
		margin-top: 10px;
	}
</style>
