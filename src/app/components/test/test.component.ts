import { Component, OnInit } from '@angular/core';
import { agnetDataInterface } from './agent.model';
import { TestService } from './test.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private _testService:TestService) { }
  // push
  public agentDatasArray = [];
  public date = new Date;
  agentDataMethods(agentData:agnetDataInterface){
    // let agentObj = {
    //   agentData,
    // };
    
    // this.agentDatasArray.push(agentData);
    this._testService.agentDataPostServiceMethods(agentData).subscribe(
      (resp) => console.log('push', resp)
    )
  };
  fetchAgentData(){
    this._testService.agentDataFetchServMethod()
    .pipe(map(resData =>{
      console.log(resData);
      const agentdatas = [];
      for(const key in resData){
        // console.log(resData);
        // console.log(resData[key])
        if(resData.hasOwnProperty(key)){
          agentdatas.push({
            agentIdnum:key, ...resData[key]
          })
        }
      };
      return agentdatas;
    }))
    .subscribe(
      (response)=> {
        console.log('get', response);
        this.agentDatasArray = response
    })
  }

  public headingTest:string = 'Test Component';
  public headingDataSubmitMethods(headingData){
    console.log(headingData)
    this.headingTest = headingData;
  }

  ngOnInit(): void {
    this.fetchAgentData()
  }

}
