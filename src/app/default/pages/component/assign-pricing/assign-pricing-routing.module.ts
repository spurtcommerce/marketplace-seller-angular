import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssingRoutes } from '../../../../../../add-ons/add-ons.constant';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignPricingRoutingModule { }
