import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsViewComponent } from './details-view/details-view.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  { path: 'details', component: DetailsViewComponent },
  { path: 'graph', component: GraphComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
