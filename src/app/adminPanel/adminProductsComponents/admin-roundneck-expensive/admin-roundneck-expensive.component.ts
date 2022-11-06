import { Component, OnInit } from '@angular/core';
import { AdminProductDataService } from '../../admin-product-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-roundneck-expensive',
  templateUrl: './admin-roundneck-expensive.component.html',
  styleUrls: ['./admin-roundneck-expensive.component.scss']
})
export class AdminRoundneckExpensiveComponent implements OnInit {

  constructor(private _httpProductService:AdminProductDataService) { }
  public communityLogo = '../../../assets/images/';
  // public isHidden:boolean = false;
  public newProduct = this.communityLogo + 'dailyprod1.png';
  public rhProductArray = [];

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
  ngOnInit(): void {
    this.fetchPrductData()
  }

}
