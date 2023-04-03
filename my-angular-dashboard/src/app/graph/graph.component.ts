import { Component } from '@angular/core';
import { MeasurementItemsService } from '../measurement-items.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  constructor(private measurementService: MeasurementItemsService) { }

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
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
      type: 'linear',
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
      alternateGridColor: undefined,
      plotBands: [{ // Gentle breeze
        from: 3,
        to: this.measurementService.selectedItem?.average,
        color: 'rgba(68, 170, 213, 0.1)',
        label: {
          text: 'Below',
          style: {
            color: '#606060'
          }
        }
      }, { // Min
        from: this.measurementService.selectedItem?.average ?? 0,
        to: 11,
        color: 'rgba(255, 170, 213, 0.1)',
        label: {
          text: 'Above',
          style: {
            color: '#606060'
          }
        }
      }, { // Max
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
      data: this.measurementService.selectedItem?.values ?? [],
      type: 'spline'
    }],
    navigation: {
      menuItemStyle: {
        fontSize: '10px'
      }
    }
  }
}
