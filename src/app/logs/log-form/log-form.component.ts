import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {

  constructor() { }
  
  public LogEmailData:string;
  public logPhoneData:string;
  public logPassData:string;
  @Input() public logformParentData;

  

  ngOnInit() {
  }
  

}
