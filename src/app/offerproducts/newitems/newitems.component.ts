import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-newitems',
  templateUrl: './newitems.component.html',
  styleUrls: ['./newitems.component.scss']
})
export class NewitemsComponent implements OnInit {
  communityLogo = '../../../assets/images/';
  public newProduct = this.communityLogo + 'roundhalf-expensive/madtees_cutsew1.jpg';
  public newProduct2 = this.communityLogo + 'roundhalf-expensive/madtees_cutsew5.jpg';
  public newProduct3 = this.communityLogo + 'kollar-expensive/sportsfit-Kollar1.jpg';
  public newProduct4= this.communityLogo + 'kollar-expensive/sportsfit-Kollar-plain5.jpg';
  
  
  constructor() { }
  // public id:string = 'item1';
  // newProductEvent(prodId){
  //   this.id = prodId;
  // }
  public imgUrl:string = this.newProduct;
  newProductEvent(imageEvent){
    this.imgUrl = imageEvent.target.src
  }
  ngOnInit() {
    
  }
  
  
}
