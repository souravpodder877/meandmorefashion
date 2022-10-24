import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialoffer',
  templateUrl: './specialoffer.component.html',
  styleUrls: ['./specialoffer.component.scss']
})
export class SpecialofferComponent implements OnInit {
  public communityLogo:string = '../../../assets/images/';
  public greatDeal:string = this.communityLogo + 'flash_sale.jpg'
  constructor() { }

  ngOnInit() {
  }

}
