import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminProductService } from 'src/app/products/admin-product.service';


@Component({
  selector: 'app-admin-prod-roundhalf-normal',
  templateUrl: './admin-prod-roundhalf-normal.component.html',
  styleUrls: ['./admin-prod-roundhalf-normal.component.scss']
})
export class AdminProdRoundhalfNormalComponent implements OnInit {

  constructor(private _router:Router, private _httpProductService:AdminProductService) {}
  public communityLogo = '../../../assets/images/';
  // public isHidden:boolean = false;
  public newProduct = this.communityLogo + 'dailyprod1.png';
  public rhProductArray:[] = [];
  

  // productBoxOpen(){
  //   this.isHidden = !this.isHidden;
  // }
  deleteProd(id){
    console.log('hi');
  }

  ngOnInit() {
    // this.getRhProductsList();
  }

}
