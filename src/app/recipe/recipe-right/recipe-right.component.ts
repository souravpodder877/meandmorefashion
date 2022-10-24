import { Component, OnInit } from '@angular/core';
// import { RecipeModuleModule } from '../recipe-module/recipe-module.module';

@Component({
  selector: 'app-recipe-right',
  templateUrl: './recipe-right.component.html',
  styleUrls: ['./recipe-right.component.scss']
})
export class RecipeRightComponent implements OnInit {
  // public recipes: RecipeModuleModule[] = [
  //   new RecipeModuleModule('Chicket Kasa', 'This is Chicken food products with flavoured garlic and oil mixture', '../../../assets/images/dailyprod1.png'),
  //   new RecipeModuleModule('Chicket Tikka', 'This is Chicken fried products with onion garlic steamed ', '../../../assets/images/dailyprod1.png'),
  // ]
  public recipeDishes:any = [
    {
      name:'Chicket Kasa', 
      description:'This is Chicken food products with flavoured garlic and oil mixture', 
      imgUrl:'../../../assets/images/dailyprod1.png'
    },
    {
      name:'Chicket Tikka', 
      description:'This is Chicken fried products with onion garlic steamed', 
      imgUrl:'../../../assets/images/dailyprod2.png'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
