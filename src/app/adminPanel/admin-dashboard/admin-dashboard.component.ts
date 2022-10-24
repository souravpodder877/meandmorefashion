import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }
  public adminCard2data = [
    {custText:'Customer', matIcon:'dns', custNumber:'36,254', figurePercentage:'5.27', timeData:'Last Month', 
    arrow:'arrow_downward', cssClass:'d-inline-flex w-50 pe-3'},
    {custText:'Products', matIcon:'widgets', custNumber:'2,24,154', figurePercentage:'6.21', timeData:'Last Month', 
    arrow:'arrow_upward', cssClass:'d-inline-flex w-50 pe-3'},
    {custText:'Agent', matIcon:'donut_small', custNumber:'2,24,154', figurePercentage:'7.48', timeData:'Last Month', 
    arrow:'arrow_upward', cssClass:'d-inline-flex w-50 pe-3'},
    {custText:'Sale', matIcon:'donut_small', custNumber:'2,24,154', figurePercentage:'4.97', timeData:'Last Month', 
    arrow:'arrow_downward', cssClass:'d-inline-flex w-50 pe-3'}
  ]

  ngOnInit() {
  }
  

}
