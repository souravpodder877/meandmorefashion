import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {

  constructor() { }
  @Input() public parentData;
  ngOnInit() {
  }

}
