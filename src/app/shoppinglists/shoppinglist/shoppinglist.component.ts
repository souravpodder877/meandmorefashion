import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {
  public communityLogo = '../../../assets/images/';
  public addRecipeName:String;
  public addRecipeImage:string = this.communityLogo + 'dailyprod1.png';
  public addRecipeIngredience:string;
  public addRecipeProcess:string;
  public addRecipeArrays:any = [];
  
  addRecipe(){
    this.addRecipeArrays.push({
      name:this.addRecipeName,
      image:this.addRecipeImage,
      ingred:this.addRecipeIngredience,
      text:this.addRecipeProcess,
    })
  }

  deleteRecipe(){
    this.addRecipeArrays.splice(this.addRecipeArrays.length -1)
  }
  constructor() { }

  ngOnInit() {
  }

}
