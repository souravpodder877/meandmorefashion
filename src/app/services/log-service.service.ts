import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {
  public url = 'https://meandmorefashionstyle-default-rtdb.firebaseio.com/loginData.json';
  constructor(private _httpclient:HttpClient) { }

  msgModal(){
    alert(`This is alert`)
  }
  
  addlogDataServer(loginData){
    return this._httpclient.post('https://meandmorefashionstyle-default-rtdb.firebaseio.com/loginData.json', loginData)
  }
  
  
}
