import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kulti',
  templateUrl: './kulti.component.html',
  styleUrls: ['./kulti.component.scss']
})
export class KultiComponent implements OnInit {

  constructor() { }
  public communityLogo = '../../../assets/images/';
  public roundHalfimageData = [
    {slideImage: this.communityLogo + 'roundhalf-normal/banner.jpg'}
  ]
  public isHidden:boolean = true;
  
  public newProduct = this.communityLogo + 'dailyprod1.png';
  
  public productsArrays = [
    {
      prodimgId:1,
      prodimgName:'RoundNeck Tees',
      prodimgPrice:250,
      prodimgRating:4,
      prodimgRatingPerson:134,
      prodimgDisPrice:150,
      prodimgUrl:this.communityLogo + 'dailyprod1.png',
      prodimgClass:'img-fluid',
      prodimgAltText:'Product-image',
    },
    {
      prodimgId:2,
      prodimgName:'RoundNeck Tees1',
      prodimgPrice:180,
      prodimgDisPrice:150,
      prodimgRating:4,
      prodimgRatingPerson:134,
      prodimgDiscount:30,
      prodimgUrl:this.communityLogo + 'dailyprod1.png',
      prodimgClass:'img-fluid',
      prodimgAltText:'Product-image',
    },
    {
      prodimgId:3,
      prodimgName:'RoundNeck Tees2',
      prodimgPrice:120,
      prodimgDisPrice:100,
      prodimgRating:4,
      prodimgRatingPerson:134,
      prodimgDiscount:30,
      prodimgUrl:this.communityLogo + 'dailyprod1.png',
      prodimgClass:'img-fluid',
      prodimgAltText:'Product-image',
    },
    {
      prodimgId:4,
      prodimgName:'RoundNeck Tees3',
      prodimgPrice:170,
      prodimgDisPrice:150,
      prodimgRating:4,
      prodimgRatingPerson:134,
      prodimgDiscount:30,
      prodimgUrl:this.communityLogo + 'dailyprod1.png',
      prodimgClass:'img-fluid',
      prodimgAltText:'Product-image',
    },
    {
      prodimgId:4,
      prodimgName:'RoundNeck Tees3',
      prodimgPrice:170,
      prodimgDisPrice:130,
      prodimgRating:4,
      prodimgRatingPerson:134,
      prodimgDiscount:30,
      prodimgUrl:this.communityLogo + 'dailyprod1.png',
      prodimgClass:'img-fluid',
      prodimgAltText:'Product-image',
    }
    
  ]
  productBoxOpen(){
    this.isHidden = !this.isHidden;
  }
  public roundHalfDataInput:any = [
    {id:1, parentClass:'col-12 col-md-4 adminForm', mainDivClass:'mb-3', inputId:'prodID', labelClass:'form-label',
    Labeltext:'Product ID', inputType:'number', inputClass:'form-control', inputName:'prodIDName', 
    inputPlaceholderText:'1'},
    {id:2, parentClass:'col-12 col-md-4 adminForm', mainDivClass:'mb-3', inputId:'prodName', labelClass:'form-label',
    Labeltext:'Product Name', inputType:'text', inputClass:'form-control', inputName:'prodName',
    inputPlaceholderText:'HiFashion'},
    {id:3, parentClass:'col-12 col-md-4 adminForm', mainDivClass:'mb-3', inputId:'prodtypeId', labelClass:'form-label',
    Labeltext:'Product Category', inputType:'text', inputClass:'form-control', inputName:'prodtypeIdName',
    inputPlaceholderText:'HiFashion'},
    {id:3, parentClass:'col-12 col-md-4 adminForm', mainDivClass:'mb-3', inputId:'prodtypeId', labelClass:'form-label',
    Labeltext:'Product Category', inputType:'select', inputClass:'form-control', inputName:'prodtypeIdName',
    inputPlaceholderText:'HiFashion'},
    {id:3, parentClass:'col-12 col-md-3 adminForm', mainDivClass:'mb-3', inputId:'prodtypeId', labelClass:'form-label',
    Labeltext:'Product Price', inputType:'select', inputClass:'form-control', inputName:'prodtypeIdName',
    inputPlaceholderText:'HiFashion'},
  ]
  public roundHalfDataSelect = [
    {parentClass:'col-12 col-md-3 adminForm', inputClass:'form-select', Labeltext:'Product Category', labelClass:'form-label', 
    selectOptiondatas:[
      {value:'RH Normal', valueText:'RH Normal'},
      {value:'RF Normal', valueText:'RF Normal'},
      {value:'RF Expensive', valueText:'RF Expensive'},
      {value:'RH Expensive', valueText:'RH Expensive'},
      {value:'Kollar Half', valueText:'Kollar Half'},
      {value:'Kulti', valueText:'Kulti'},
      {value:'Trousers', valueText:'Trousers'},
      {value:'Child Normal', valueText:'Child Normal'},
      {value:'Child Expensive', valueText:'Child Expensive'},
    ]},
  ]
  ngOnInit() {
  }


}
