import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogFormComponent } from 'src/app/logs/log-form/log-form.component';
import { CommonAngularModule } from '../common-angular/common-angular.module';
import { FormFieldsComponent } from 'src/app/components/form-fields/form-fields.component';
import { FormSelectDropdownComponent } from 'src/app/components/form-select-dropdown/form-select-dropdown.component';

const componentInstance = [
  LogFormComponent,
  FormFieldsComponent,
  FormSelectDropdownComponent
]

@NgModule({
  declarations: [
    componentInstance
  ],
  imports: [
    CommonModule,
    CommonAngularModule
  ],
  exports:[
    componentInstance
  ]
})
export class FormInputModule { }
