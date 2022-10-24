import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.scss']
})
export class LeftpanelComponent implements OnInit {
  public leftNavs:any = [
    {Leftnavname:'Recipes', leftnavlink:'/recipe', leftnavIcon:'fa fa-cutlery'},
    {Leftnavname:'Roundnecks', leftnavlink:'/products/roundnecktshirts', leftnavIcon:'fa fa-cog'},
    // {Leftnavname:'Kulti', leftnavlink:'/products/kulti'},
    {Leftnavname:'Tshirt', leftnavlink:'/tshirts', leftnavIcon:'fa fa-heartbeat'},
    {Leftnavname:'Casual Shirts', leftnavlink:'/casualshirts', leftnavIcon:'fa fa-pencil'},
    {Leftnavname:'Formal Shirts', leftnavlink:'/formalshirts', leftnavIcon:'fa fa-tree'},
    // {Leftnavname: 'Polo Neck', leftnavlink:'/tv'},
    // {Leftnavname: 'Smart Kollar', leftnavlink:'/printer'},
    {Leftnavname: 'Kurtis', leftnavlink:'/kurtis', leftnavIcon:'fa fa-bus'},
    {Leftnavname: 'Salwar', leftnavlink:'/salwar', leftnavIcon:'fa fa-google-wallet'},
    {Leftnavname: 'Punjabi', leftnavlink:'/punjabies', leftnavIcon:'fa fa-graduation-cap'},
    {Leftnavname: 'Sarees', leftnavlink:'/sarees', leftnavIcon:'fa fa-coffee'},
    {Leftnavname: 'Ethenic Wear', leftnavlink:'/Ethenic', leftnavIcon:'fa fa-shopping-basket'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
