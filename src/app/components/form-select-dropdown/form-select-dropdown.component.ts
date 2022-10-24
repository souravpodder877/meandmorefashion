import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-select-dropdown',
  templateUrl: './form-select-dropdown.component.html',
  styleUrls: ['./form-select-dropdown.component.scss']
})
export class FormSelectDropdownComponent implements OnInit {
  @Input() public logSelectParentDatas;
  constructor() { }

  ngOnInit() {
  }

}
