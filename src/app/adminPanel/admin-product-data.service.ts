import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { roundDataInterface } from '../adminPanel/round.model';

@Injectable({
  providedIn: 'root'
})
export class AdminProductDataService {

  constructor(private _httpClient:HttpClient) { }
  public roundNeckTshirt = 'https://meandmorefashionstyle-default-rtdb.firebaseio.com/roundNeckTshirt.json';
  
  
  adminProductDataAddServer(myReactiveData:any){
    return this._httpClient.post<roundDataInterface>(this.roundNeckTshirt , myReactiveData);
  }
  fetchProductDataServer():Observable<any>{
    return this._httpClient.get<roundDataInterface>(this.roundNeckTshirt)
  }
}
