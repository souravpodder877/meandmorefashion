import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightadpanel',
  templateUrl: './rightadpanel.component.html',
  styleUrls: ['./rightadpanel.component.scss']
})
export class RightadpanelComponent implements OnInit {
  public communityLogo:string = '../../../assets/images/';
  public pilw_banner = this.communityLogo + 'color_pillow.png';
  public interior_design = this.communityLogo + 'interior_design.jpg';
  constructor() { }

  ngOnInit() {
  }

}
