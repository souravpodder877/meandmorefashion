import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-banner',
  templateUrl: './offer-banner.component.html',
  styleUrls: ['./offer-banner.component.scss']
})
export class OfferBannerComponent implements OnInit {
  public communityLogo = '../../../assets/images/';
  public addbanners = [
    {addbannerName : this.communityLogo + 'addbanner.jpg'},
    // {addbannerName : this.communityLogo + 'addbanner.jpg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
