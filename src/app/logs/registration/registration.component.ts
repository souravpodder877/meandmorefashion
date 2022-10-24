import { Component, OnInit } from '@angular/core';
import { MsgServiceService } from 'src/app/services/log-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public communityLogo:string = '../../../assets/images/';
  public LogFormText:string = 'Register with Phone'
  public productName:string = 'Save Data';
  public logImage:string = this.communityLogo + 'login.jpg';
  
  constructor(private _newMsgServiceInstance:MsgServiceService) { }
  
  ngOnInit() {
  }
  msgAlert(){
    this._newMsgServiceInstance.msgModal();
  }

}
