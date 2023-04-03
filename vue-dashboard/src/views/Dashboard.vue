<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { useMeasureStore } from '../stores/measureItems'
import { storeToRefs } from 'pinia'
import DimensionCard from '../components/DimensionCard.vue';



const counterStore = useCounterStore()
const measureStore = useMeasureStore()
const { count } = storeToRefs(counterStore)
const { dimensionList, selectedItem } = storeToRefs(measureStore)
</script>

<template>
  <div class="hero-content">
    <div class="grid grid-cols-3 gap-8">      
      <DimensionCard :dimension="dimension" v-for="dimension in dimensionList" @click="selectedItem = dimension" ></DimensionCard>     
    </div>
  </div>
</template>
