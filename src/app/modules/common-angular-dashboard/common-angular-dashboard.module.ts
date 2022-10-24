import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCard2Component } from 'src/app/components/dashboard-card2/dashboard-card2.component';
import { DashboardCardComponent } from 'src/app/components/dashboard-card/dashboard-card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



const componentInstance = [
    DashboardCard2Component,
    DashboardCardComponent,
]


@NgModule({
  declarations: [
    componentInstance
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports:[
    componentInstance
  ]
})
export class CommonAngularDashboardModule { }
