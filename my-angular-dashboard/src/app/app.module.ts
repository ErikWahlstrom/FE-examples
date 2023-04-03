import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DimensionCardComponent } from './dimension-card/dimension-card.component';
import { FormsModule } from '@angular/forms';
import { GraphComponent } from './graph/graph.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    DetailsViewComponent,
    DashboardComponent,
    DimensionCardComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
