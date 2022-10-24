import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card2',
  templateUrl: './dashboard-card2.component.html',
  styleUrls: ['./dashboard-card2.component.scss']
})
export class DashboardCard2Component implements OnInit {

  constructor() { }
  @Input() parentDatas:any;
  ngOnInit() {
  }

}
