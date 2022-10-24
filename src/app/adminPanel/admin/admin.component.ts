import { Component, OnInit } from '@angular/core';

import { MatTab } from '@angular/material';
import { AdminProductService } from 'src/app/products/admin-product.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  constructor(private _AdminProductService: AdminProductService) { }
  
  public adminMenus = [
    {contentText:'Home', routerPathValue:'adminHome', icon:'fa fa-home',},
    {contentText:'Dashboard', routerPathValue:'adminDashboard', icon:'fa fa-align-left',},
    {contentText:'Products', routerPathValue:'adminProduct', icon:'fa fa-anchor'},
    {contentText:'Employees', routerPathValue:'adminEmployees', icon:'fa fa-line-chart',},
    {contentText:'Tables', routerPathValue:'adminTables', icon:'fa fa-table',},
    {contentText:'Chart', routerPathValue:'adminChart', icon:'fa fa-line-chart',},
    {contentText:'Email', routerPathValue:'adminEmail', icon:'fa fa-line-chart',},
  ]
  public id:string = 'product';

  tabCont(idParam){
    this.id = idParam;
  }
  ngOnInit() {
    
  }

  

}
