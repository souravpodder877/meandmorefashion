import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-product-list',
  templateUrl: './all-product-list.component.html',
  styleUrls: ['./all-product-list.component.scss']
})
export class AllProductListComponent implements OnInit {

  constructor() { }
  public communityLogo = '../../../assets/images/';
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
  ngOnInit() {
  }

}
