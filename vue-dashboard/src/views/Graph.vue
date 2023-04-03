<script setup lang="ts">
import { Chart } from 'highcharts-vue'
import type { Store } from 'pinia';
import { defineComponent, ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useMeasureStore, type MeasureItem } from '../stores/measureItems'
const measureStore = useMeasureStore()
const { selectedItem } = storeToRefs(measureStore)

const chartOptions = ref({
  chart: {
    type: 'spline',
    scrollablePlotArea: {
      minWidth: 600,
      scrollPositionX: 1
    }
  },
  title: {
    text: 'Measured items',
    align: 'center'
  },  
  xAxis: {
    type: 'number',
    labels: {
      overflow: 'justify'
    }
  },
  yAxis: {
    title: {
      text: 'Dimension (mm)'
    },
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
    plotBands: [ { // Gentle breeze
      from: 3,
      to: selectedItem.value?.average,
      color: 'rgba(68, 170, 213, 0.1)',
      label: {
        text: 'Below',
        style: {
          color: '#606060'
        }
      }
    }, { // Fresh breeze
      from: selectedItem.value?.average,
      to: 11,
      color: 'rgba(255, 170, 213, 0.1)',
      label: {
        text: 'Above',
        style: {
          color: '#606060'
        }
      }
    }, { // Strong breeze
      from: 11,
      to: 14,
      color: 'rgba(0, 0, 0, 0)',
      label: {
        text: 'Strong breeze',
        style: {
          color: '#606060'
        }
      }
    }]
  },
  tooltip: {
    valueSuffix: ' mm'
  },
  plotOptions: {
    spline: {
      lineWidth: 4,
      states: {
        hover: {
          lineWidth: 5
        }
      },
      marker: {
        enabled: false
      },      
    }
  },
  series: [{
    name: 'Items',
    data: selectedItem.value?.values,    
  }],
  navigation: {
    menuItemStyle: {
      fontSize: '10px'
    }
  }
})

</script>

<template>  
  <Chart :options="chartOptions"></Chart>
</template>
