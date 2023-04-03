<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMeasureStore } from '../stores/measureItems'
import DimensionCard from '../components/DimensionCard.vue';
import { ref } from '@vue/reactivity';

const measureStore = useMeasureStore()
const { selectedItem } = storeToRefs(measureStore)

const modalInput = ref()
const newName = ref(selectedItem.value?.name ?? '')
const newMax = ref(selectedItem.value?.max ?? 0)

const saveValues = () => {
  if (selectedItem.value) {
    selectedItem.value.max = newMax.value;
    selectedItem.value.name = newName.value;
    modalInput.value = false
  }
}

</script>
<template>
  <div>
    <div class="hero-content" v-if="selectedItem !== undefined">
      <DimensionCard :dimension="selectedItem" @click="modalInput = true" />
    </div>
    <div class="stats shadow" v-if="selectedItem !== undefined">
      <div class="stat place-items-center" v-for="(value, index) in selectedItem.values" :key="index">
        <div class="stat-title">Value {{ index + 1 }}</div>
        <div class="stat-value">{{ value }}</div>
        <div class="stat-desc">mm</div>
      </div>
    </div>
    <div>
      <div class="modal" :class="modalInput ? 'modal-open' : ''">
        <div class="modal-box">
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">New dimension name</span>
            </label>
            <input type="text" v-model="newName" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <label class="label">
              <span class="label-text">New max value</span>
            </label>
            <input type="number" v-model="newMax" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <div class="right-align">
              <button class="btn btn-primary" @click="saveValues">Save</button>
              <button class="btn" @click="modalInput = false">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.right-align {
  display: flex;
  flex-direction: row-reverse;
  gap: 5px;
  margin-top: 10px;
}
</style>
