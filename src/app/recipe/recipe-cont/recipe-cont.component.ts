import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-cont',
  templateUrl: './recipe-cont.component.html',
  styleUrls: ['./recipe-cont.component.scss']
})
export class RecipeContComponent implements OnInit {
  constructor() { }
  public recipeNavs:any = [
    {Leftnavname: 'Chicken', leftnavlink:'chicken'},
    {Leftnavname: 'Mutton', leftnavlink:'mutton'},
    {Leftnavname: 'Veg', leftnavlink:'veg'},
    {Leftnavname: 'Southindian', leftnavlink:'southindian'},
    {Leftnavname: 'Northndian', leftnavlink:'northindian'},
    {Leftnavname: 'Continental', leftnavlink:'continental'},
  ]
  
  public recipeRouter:boolean = false;
  ngOnInit() {
  }

}
