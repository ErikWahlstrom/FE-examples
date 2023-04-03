import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MeasureItem, MeasurementItemsService } from '../measurement-items.service';

@Component({
  selector: 'app-dimension-card',
  templateUrl: './dimension-card.component.html',
  styleUrls: ['./dimension-card.component.css']
})
export class DimensionCardComponent {
  @Input() dimension: MeasureItem | undefined
  @Output()
  public click = new EventEmitter<MouseEvent>();
  selectedItem: MeasureItem | undefined;
  constructor(private measService: MeasurementItemsService) {
    this.measService.selectedItemObs.subscribe(x => this.selectedItem = x);
   }

  public handleClick(event: MouseEvent) {
    this.click.emit(event);
  }
}
