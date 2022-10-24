import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent implements OnInit {
  @Input() public logInputParentDatas;
  // public input:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
