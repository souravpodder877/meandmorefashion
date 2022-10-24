import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(private _httpclientProduct: HttpClient) { }
  private httpServerUrl = 'https://meandmorefashionstyle-default-rtdb.firebaseio.com/';
  // private bestOfferurl = 'https://meandmorefashionstyle-default-rtdb.firebaseio.com/bestOffers.json';
  saveRoundHalfData(prodRoundNeck:any[]){
    return this._httpclientProduct.put(this.httpServerUrl, prodRoundNeck);
  }
  
  // saveBestOfferData(productBestDeals:any[]){
  //   return this._httpclient.put(this.bestOfferurl, productBestDeals)
  // }
  addRhProductServerMethods(rhSingleProduct:any){
    // let prod =[];
    // prod.push(roundhalfProduct);
    return this._httpclientProduct.post(this.httpServerUrl + 'roundHalfProduct.json', rhSingleProduct);
  }
  getRHProductServerMethods():Observable<any>{
    return this._httpclientProduct.get(this.httpServerUrl + 'roundHalfProduct.json')
  }
  deleteRHProductServerMethods(productID:any):Observable<any>{
    return this._httpclientProduct.delete(this.httpServerUrl + 'roundHalfProduct.json', productID)
  }
}