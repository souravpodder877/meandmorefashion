import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { agnetDataInterface } from './agent.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private _httpClient: HttpClient) { }
  public agentUrl = 'https://meandmorefashionstyle-default-rtdb.firebaseio.com/agentData.json'

  agentDataPostServiceMethods(agentData:any){
    return this._httpClient.post<agnetDataInterface>(this.agentUrl, agentData);
  };
  agentDataFetchServMethod():Observable<any>{
    return this._httpClient.get<agnetDataInterface>(this.agentUrl);
  }
}
