import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {CommonModule} from '@angular/common';


import { DashboardComponent } from './dashboard.component';
import {DynamicTabComponent} from './dynamictab.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    CommonModule,
    TabsModule.forRoot()

  ],
  declarations: [ DashboardComponent,DynamicTabComponent ]
})
export class DashboardModule { }
