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
  public newProductImage:boolean = true;
  public newProductImage2:boolean = true;;
  public newProductImage3:boolean = true;;
  public newProductImage4:boolean = true;
  // public newImageDisplay:any = {
  //   isDisplay:true
  // }
  // public newImageDisplayNone:any = {
  //   isDisplayNone:true
  // }
  constructor() { }
  public id:string = 'item1';
  newProductEvent(prodId){
    this.id = prodId;
  }
  ngOnInit() {
    
  }
  // newProductEvent(){
  //   this.newProductImage = true;
  //   this.newProductImage2 = false;
  //   this.newProductImage3 = false;
  //   this.newProductImage4 = false;
  // }
  // newProductEvent2(){
  //   this.newProductImage = false;
  //   this.newProductImage2 = true;
  //   this.newProductImage3 = false;
  //   this.newProductImage4 = false;
  // }
  // newProductEvent3(){
  //   this.newProductImage = false;
  //   this.newProductImage2 = false;
  //   this.newProductImage3 = true;
  //   this.newProductImage4 = false;
  // }
  // newProductEvent4(){
  //   this.newProductImage = false;
  //   this.newProductImage2 = false;
  //   this.newProductImage3 = false;
  //   this.newProductImage4 = true;
  // }
  
}
