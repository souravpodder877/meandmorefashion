import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AdminProductDataService } from '../../admin-product-data.service';


@Component({
  selector: 'app-admin-prod-roundhalf-normal',
  templateUrl: './admin-prod-roundhalf-normal.component.html',
  styleUrls: ['./admin-prod-roundhalf-normal.component.scss']
})
export class AdminProdRoundhalfNormalComponent implements OnInit {

  constructor(private _router:Router, private _httpProductService:AdminProductDataService) {}
  public communityLogo = '../../../assets/images/';
  // public isHidden:boolean = false;
  public newProduct = this.communityLogo + 'dailyprod1.png';
  public rhProductArray = [];
  

  // productBoxOpen(){
  //   this.isHidden = !this.isHidden;
  // }
  
  fetchPrductData(){
    this._httpProductService.fetchProductDataServer()
    .pipe(map(resData =>{
      console.log(resData);
      const productDatas = [];
      for(const key in resData){
        if(resData.hasOwnProperty(key)){
          productDatas.push({
            prodIdnum:key, ...resData[key]
          })
        }
      };
      return productDatas;
    }))
    .subscribe(
      (response)=> {
        console.log('get', response);
        this.rhProductArray = response
    })
  }
  deleteProd(id){
    
  }
  ngOnInit(): void {
    this.fetchPrductData()
  }

}
