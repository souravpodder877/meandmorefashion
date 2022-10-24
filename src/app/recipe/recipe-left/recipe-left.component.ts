import { Component, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-recipe-left',
  templateUrl: './recipe-left.component.html',
  styleUrls: ['./recipe-left.component.scss']
})
export class RecipeLeftComponent implements OnInit {
  @Input() public parentData;
  
  // public recipeNavs:any = [
  //   {Leftnavname: 'Chicken', leftnavlink:'/chicken'},
  //   {Leftnavname: 'Mutton', leftnavlink:'/mutton'},
  //   {Leftnavname: 'Veg', leftnavlink:'/veg'},
  //   {Leftnavname: 'Southindian', leftnavlink:'/southindian'},
  //   {Leftnavname: 'Northndian', leftnavlink:'/northindian'},
  //   {Leftnavname: 'Continental', leftnavlink:'/continental'},
  // ]
  
  constructor() { }

  ngOnInit() {
  }

}
