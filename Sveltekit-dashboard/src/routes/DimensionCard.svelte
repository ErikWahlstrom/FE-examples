<script lang="ts">

import {selectedItem, type MeasureItem} from "../stores"
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let dimension: MeasureItem;

</script>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="card w-96 bg-base-100 shadow-xl {dimension === $selectedItem ? 'bg-info' : ''}" on:click={() => dispatch('click')}>
        <div class="card-body">
            <h2 class="card-title">{ dimension?.name }</h2>
            <div class="flex items-center p-4 shadow-xl rounded-box bg-accent text-accent-content">
                <div class="flex-1 px-2">
                    <h3 class="text-3xl font-extrabold">{ dimension?.max }</h3>
                    <p class="text-sm text-opacity-80">Max</p>
                </div>
            </div>
            <div class="flex items-center p-4 shadow-xl rounded-box bg-accent text-accent-content">
                <div class="flex-1 px-2">
                    <h3 class="text-3xl font-extrabold">{ dimension?.min }</h3>
                    <p class="text-sm text-opacity-80">Min</p>
                </div>
            </div>
            <div class="flex items-center p-4 shadow-xl rounded-box bg-accent text-accent-content">
                <div class="flex-1 px-2">
                    <h3 class="text-3xl font-extrabold">{ dimension?.average }</h3>
                    <p class="text-sm text-opacity-80">Average</p>
                </div>
            </div>
        </div>
    </div>
