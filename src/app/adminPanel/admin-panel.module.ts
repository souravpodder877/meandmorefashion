import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminChartComponent } from './admin-chart/admin-chart.component';


import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';

import { CommonAngularModule } from '../modules/common-angular/common-angular.module';
import { CommonAngularDashboardModule } from '../modules/common-angular-dashboard/common-angular-dashboard.module';
import { FormInputModule } from '../modules/form-input/form-input.module';
import { AuthGuardGuard } from '../auth/auth-guard.guard';
import { Route, RouterModule } from '@angular/router';
import { AdminProdRoundhalfNormalComponent } from './adminProductsComponents/admin-prod-roundhalf-normal/admin-prod-roundhalf-normal.component';
import { KultiComponent } from '../products/kulti/kulti.component';

import { AdminEmployeesComponent } from './admin-employees/admin-employees.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoundneckExpensiveComponent } from './adminProductsComponents/admin-roundneck-expensive/admin-roundneck-expensive.component';




const adminRoutes = [
    {path:'', canActivate:[AuthGuardGuard], component:AdminComponent, children:[
      {path:'adminLogin', component:AdminLoginComponent },
      {path:'adminRegister', component:AdminRegisterComponent},
      {path:'adminHome', component:AdminHomeComponent},
      {path:'adminDashboard', component:AdminDashboardComponent},
      {path:'adminProduct', children:[
        {path:'', component:AdminProductComponent, },
        {path:'roundHalfNormal',  children:[
          {path:'', component:AdminProdRoundhalfNormalComponent,},
          {path:'addProduct', component:AddProductComponent},
        ]},
        {path:'roundHalfExpensive', children:[
          {path:'', component:AdminRoundneckExpensiveComponent},
          {path:'addProduct', component:AddProductComponent},
        ]},
        {path:'kulti', children:[
          {path:'', component:KultiComponent,},
          {path:'addProduct', component:AddProductComponent},
        ]},
        
      ]},
      {path:'adminEmployees', component:AdminEmployeesComponent},
      {path:'adminChart', component:AdminChartComponent},
    ]},
  ]

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminProductComponent,
    AdminChartComponent,
    AdminHomeComponent,

    AdminProdRoundhalfNormalComponent,
    KultiComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminProductListComponent,
    AdminEmployeesComponent,
    AddProductComponent,
    AdminRoundneckExpensiveComponent,
    
  ],
  imports: [
    CommonModule,
    CommonAngularModule,
    CommonAngularDashboardModule,
    FormsModule,
    ReactiveFormsModule,
    FormInputModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports:[
    RouterModule,
  ]
})
export class AdminPanelModule { }
