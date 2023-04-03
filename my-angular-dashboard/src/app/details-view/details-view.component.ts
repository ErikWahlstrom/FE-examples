import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { MeasureItem, MeasurementItemsService } from '../measurement-items.service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent {
  selectedObs$: Subject<MeasureItem | undefined> = new Subject<MeasureItem | undefined>();;
  
  constructor(private measService: MeasurementItemsService){
    console.log("logging meas serv", this.measService)
    this.measService.selectedItemObs.subscribe(x => {
      console.log("observinggg", x?.name)
      this.selectedItem = x})
  }

  ngOnInit(){
    this.selectedItem = this.measService.selectedItem;
    this.newMax = this.selectedItem?.max ?? 0;
    this.newName = this.selectedItem?.name ?? "";
  }
  
  selectedItem: MeasureItem | undefined

  newMax: number = 0
  newName: string = "";
  modalInput = false;

  saveValues = () => {
    if (this.measService.selectedItem) {
      this.measService.selectedItem.max = this.newMax;
      this.measService.selectedItem.name = this.newName;      
      this.modalInput = false
      console.log("saved", this.selectedItem?.name, this.measService.selectedItem)
    }
  }
  showModal() {
    this.modalInput = true;
  }
  hideModal() {
    this.modalInput = false;
  }
}
