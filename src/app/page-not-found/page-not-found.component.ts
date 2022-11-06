import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public communityLogo = '../../assets/images/';
  public pageNotfoundImage = this.communityLogo + '98449-coming-soon.gif';
  constructor() { }

  ngOnInit() {
  }

}
