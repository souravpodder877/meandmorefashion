
import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';
import { MsgServiceService } from 'src/app/services/log-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public communityLogo:string = '../../../assets/images/';
  public LogFormText:string = 'Welcome Back!'
  public productName:string = 'Remeber Me';
  public logImage:string = this.communityLogo + 'login.jpg';
  // public logDataServer:any = [];
  public LogEmailData:string;
  public LogPasswData:string;
  public logPhoneData:number;
  public logCompData:string;
  constructor(private _router: Router,private _msgService: MsgServiceService) { 
    
  }
  logDataPushServerMethod(){
    let loginData = {
      Phone: this.logPhoneData,
      Company: this.logCompData,
    };
    this._router.navigate(['/login'])
    // this._router.navigate(['/login'])
    // console.log(loginData);
    this._msgService.addlogDataServer(loginData).subscribe(
      (response)=> console.log(response),
    )
  }
  

  logFormSub() {
    this._msgService.msgModal();
  }
  ngOnInit() {
    
  }
  

}
