import { Component, OnInit } from '@angular/core';
import { NavMenuService } from '../nav-menu.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public imageUrl:string = '../../../assets/images/';
  public logo = this.imageUrl + 'logo-web.png';
  public navMenus:any = [];
  public subHeadingIcon = ''
  
  public isDisable:boolean = true;
  constructor(private _httpNavService:NavMenuService) {

  }

  ngOnInit() {
    this.navMenus = this._httpNavService.navMenuServiceMethods();
  }

}
