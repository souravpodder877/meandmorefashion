import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {
  public communityLogo = '../../../assets/images/';
  public newProduct = this.communityLogo + 'dailyprod1.png';
  public suggestProductData:any = [
    {id:1, prodimgUrl:this.communityLogo + 'roundhalf-expensive/madtees_cutsew1.jpg', prodimgName:'Madtees CutSews', 
    prodimgPrice:310, prodimgRating:4, prodimgRatingPerson:130, prodimgDiscount:25  },
    {id:2, prodimgUrl:this.communityLogo + 'roundfull-expensive/sportsfit-roundfull-doublecolor1.jpg', 
    prodimgName:'Sportsfit RoundFull', prodimgPrice:400, prodimgRating:4, prodimgRatingPerson:128, prodimgDiscount:10  },
    {id:3, prodimgUrl:this.communityLogo + 'kollar-expensive/sportsfit-Kollar1.jpg', 
    prodimgName:'Sportsfit Polo Kollar', prodimgPrice:620, prodimgRating:4.2, prodimgRatingPerson:255, prodimgDiscount:10  },
    {id:4, prodimgUrl:this.communityLogo + 'kollar-expensive/sportsfit-Kollar5.jpg', 
    prodimgName:'Sportsfit Polo Kollar', prodimgPrice:620, prodimgRating:4.2, prodimgRatingPerson:327, prodimgDiscount:10  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
