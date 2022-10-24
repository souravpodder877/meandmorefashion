import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public communityLogo = '../../../assets/images/';
  public paymentSecures = [
    {name: '100% PAYMENT SECURE', icon: '<i class="fa fa-university" aria-hidden="true"></i>', link: ''},
    {name: '24 Hours/ 7days Support', icon: '<i class="fa fa-phone" aria-hidden="true"></i>', link: ''},
    {name: 'Best Price Guarantee', icon: '<i class="fa fa-picture-o" aria-hidden="true"></i>', link: ''}
  ]
  
  // public newProduct = this.communityLogo + 'rn/double2_1.jpg';
  public ngSlidesHome = [
    {slideID:1, slideImage:this.communityLogo + 'banner.jpg', bannerHeadtext:'First slide label'},
    {slideID:2, slideImage:this.communityLogo + 'banner2.jpg', bannerHeadtext:'Second slide label'}
  ] 
  
  constructor() { }

  ngOnInit() {
  }

}
