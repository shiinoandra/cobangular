import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import {DynamicTabComponent} from './dynamictab.component';

const routes: Routes =[{
  path: '',
  component: DashboardComponent
}, {
  path: 'dynamictab',
  component: DynamicTabComponent
}]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
