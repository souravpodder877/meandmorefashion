import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminProductDataService {

  constructor(private _httpClient:HttpClient) { }
  public firebaseBaseUrl = 'https://meandmorefashionstyle-default-rtdb.firebaseio.com/';
  
  adminProductDataAddServer(rhProductData:any){
    return this._httpClient.post(this.firebaseBaseUrl + 'roundHalfProduct.json', rhProductData)
  }
}
