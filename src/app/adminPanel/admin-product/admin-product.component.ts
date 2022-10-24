import { Component, OnInit } from '@angular/core';
import { AdminProductService } from 'src/app/products/admin-product.service';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  constructor(private _httpProductservice:AdminProductService) { }
  public communityLogo = '../../../assets/images/';
  public dashboardCards:any = [
    {cardid:1, cardNumber:54, cardName:'On Arriaval', cardStatus:'Daily Deals', cardAna:'card Analysis'},
    {cardid:2, cardNumber:18, cardName:'Dealer', cardStatus:'Top Trending', cardAna:'Dealer Data'},
    {cardid:3, cardNumber:78, cardName:'Customer', cardStatus:'New Arriaval', cardAna:'Customer Data'},
    {cardid:4, cardNumber:23, cardName:'Sale', cardStatus:'Upcoming Store', cardAna:'Sale Data'},
  ]
  public productCats = [
    {id:1, prodimgName:'RoundNeck Half', prodCategory:'Normal', prodimgUrl:this.communityLogo + 'roundhalf-normal/rock-this1.jpg', 
    qntyText:'View More', link:'roundHalfNormal'},
    {id:2, prodimgName:'RoundNeck Half', prodCategory:'Expensive', prodimgUrl:this.communityLogo + 'roundhalf-expensive/madtees_cutsew1.jpg', 
    qntyText:'View More', link:'roundHalfExpensive'},
    {id:3, prodimgName:'RoundNeck Full', prodCategory:'Normal', prodimgUrl:this.communityLogo + 'roundfull-expensive/sportsfit-roundfull-doublecolor2.jpg', 
    qntyText:'View More', link:'roundFullNormal'},
    {id:4, prodimgName:'RoundNeck Full', prodCategory:'Expensive', prodimgUrl:this.communityLogo + 'roundfull-expensive/sportsfit-roundfull-doublecolor1.jpg', 
    qntyText:'View More', link:'roundFullExpensive'},
    {id:5, prodimgName:'Kollar', prodCategory:'Normal', prodimgUrl:this.communityLogo + 'kollar-expensive/sportsfit-Kollar3.jpg', 
    qntyText:'View More', link:'roundHalf'}, 
    {id:6, prodimgName:'Kollar', prodCategory:'Expensive', prodimgUrl:this.communityLogo + 'kollar-expensive/sportsfit-Kollar5.jpg', 
    qntyText:'View More', link:'roundHalf'},
    {id:7, prodimgName:'Kulti', prodCategory:'Normal', prodimgUrl:this.communityLogo + 'kulti/kultiPrinted.jpg', 
    qntyText:'View More', link:'kulti'}
  ]

  ngOnInit() {
  }

}
