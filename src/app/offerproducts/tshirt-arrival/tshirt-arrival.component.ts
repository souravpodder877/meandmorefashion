import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirt-arrival',
  templateUrl: './tshirt-arrival.component.html',
  styleUrls: ['./tshirt-arrival.component.scss']
})
export class TshirtArrivalComponent implements OnInit {
  public communityLogo = '../../../assets/images/';
  public newProduct = this.communityLogo + 'dailyprod1.png';
  constructor() { }

  ngOnInit() {
  }

  public tshirtArrivalData:any = [
    {id:1, prodimgUrl:this.communityLogo + 'roundhalf-expensive/madtees_cutsew1.jpg', prodimgName:'Madtees CutSews', 
    prodimgPrice:310, prodimgDisPrice:260, prodimgRating:4, prodimgRatingPerson:130,},
    {id:2, prodimgUrl:this.communityLogo + 'roundfull-expensive/sportsfit-roundfull-doublecolor1.jpg', 
    prodimgName:'Sportsfit RoundFull', prodimgPrice:400, prodimgDisPrice:320, prodimgRating:4, 
    prodimgRatingPerson:128, },
    {id:3, prodimgUrl:this.communityLogo + 'kollar-expensive/sportsfit-Kollar1.jpg', 
    prodimgName:'Sportsfit Polo Kollar', prodimgPrice:620, prodimgDisPrice:520, prodimgRating:4.2, prodimgRatingPerson:255, },
    {id:4, prodimgUrl:this.communityLogo + 'kollar-expensive/sportsfit-Kollar5.jpg', 
    prodimgName:'Sportsfit Polo Kollar', prodimgPrice:550, prodimgDisPrice:480, prodimgRating:4.2, prodimgRatingPerson:327,}
  ]

}
