import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommonAngularModule } from '../modules/common-angular/common-angular.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonAngularDashboardModule } from '../modules/common-angular-dashboard/common-angular-dashboard.module';
import { FormInputModule } from '../modules/form-input/form-input.module';



const LogRoute: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistrationComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    // LogFormComponent
  ],
  imports: [
    CommonModule,
    CommonAngularModule,
    CommonAngularDashboardModule,
    FormInputModule,
    RouterModule.forChild(LogRoute)
  ],
  exports: [
    RouterModule,
    // LogFormComponent
  ]

})
export class LogModule { }
