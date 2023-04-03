<script lang="ts">
	import { selectedItem } from "../../stores";
    import * as Highcharts from 'highcharts';


const chartOptions : Highcharts.Options = {
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
      type: "linear",
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
      plotBands: [ { // Gentle breeze
        from: 3,
        to: $selectedItem?.average,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Below',
          style: {
            color: '#606060'
          }
        }
      }, { // Fresh breeze
        from: $selectedItem?.average,
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
      data: $selectedItem?.values,
      type: "spline"
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  }

  	import Exporting from 'highcharts/modules/exporting';
	import { onMount } from "svelte";
// Initialize exporting module.
Exporting(Highcharts);

onMount(async () => {
Highcharts.chart('contajner', chartOptions);		
	});
// Generate the chart
  
  </script>
  
  <div id="contajner"></div>