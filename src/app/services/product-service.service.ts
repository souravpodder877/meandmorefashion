import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _httpclientModule:HttpClient) { }
  public communityLogo = '../../../assets/images/';
  public httpUrl = "https://meandmorefashionstyle-default-rtdb.firebaseio.com/";
  // public newProductDataFetchMethods():Observable<any>{
  //   return this._httpclientModule.get('this.newProdurl');
  // }
  public newProductDataFetchMethods(){
    return [
      {id:1, prodimgUrl:this.communityLogo + 'roundhalf-expensive/madtees_cutsew1.jpg', prodimgName:'Madtees CutSews', 
      prodimgPrice:310, prodimgRating:4, prodimgRatingPerson:130, prodimgDiscount:25  },
      {id:2, prodimgUrl:this.communityLogo + 'roundfull-expensive/sportsfit-roundfull-doublecolor1.jpg', 
      prodimgName:'Sportsfit RoundFull', prodimgPrice:400, prodimgRating:4, prodimgRatingPerson:128, prodimgDiscount:10  },
      {id:3, prodimgUrl:this.communityLogo + 'kollar-expensive/sportsfit-Kollar1.jpg', 
      prodimgName:'Sportsfit Polo Kollar', prodimgPrice:620, prodimgRating:4.2, prodimgRatingPerson:255, prodimgDiscount:10  },
      {id:4, prodimgUrl:this.communityLogo + 'kollar-expensive/sportsfit-Kollar5.jpg', 
      prodimgName:'Sportsfit Polo Kollar', prodimgPrice:620, prodimgRating:4.2, prodimgRatingPerson:327, prodimgDiscount:10 }
    ]
  }

  public topOfferfetchDataMethods():Observable<any>{
    return this._httpclientModule.get('https://mocki.io/v1/075db239-6cab-443a-a47e-3515ce95766e');
  }
  // addproductRH
  
}

