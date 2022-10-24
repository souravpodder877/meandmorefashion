import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/logs/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public imageUrl:string = '../../../assets/images/';
  public logo = this.imageUrl + 'logo.png';
  public headerLogs: any = [
    {name: 'Login', link:'/login'},
    {name: 'Register', link:'/register'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
