import { Component } from '@angular/core';
import { DimensionCardComponent } from '../dimension-card/dimension-card.component';
import { MeasureItem, MeasurementItemsService } from '../measurement-items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  setSelectedItem(item: MeasureItem) {
    console.log("set tiem")
    this.measService.setSelectedItem(item);
  }
  measurements: MeasureItem[] = []
  constructor(private measService: MeasurementItemsService) {
  }
  ngOnInit() {
    this.measurements = this.measService.getMeasurements();
    if (this.measService.selectedItem){
      this.setSelectedItem(this.measService.selectedItem);
    }
  }
}
