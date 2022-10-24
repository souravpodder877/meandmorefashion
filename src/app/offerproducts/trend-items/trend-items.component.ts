import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-trend-items',
  templateUrl: './trend-items.component.html',
  styleUrls: ['./trend-items.component.scss']
})
export class TrendItemsComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public communityLogo = '../../../assets/images/';
  public newProduct = this.communityLogo + 'rn/double2_1.jpg';
  public ngSlidesTrend = [
    {slideID:1, slideImage:this.communityLogo + 'banner.jpg', bannerHeadtext:'First slide label'},
    {slideID:2, slideImage:this.communityLogo + 'banner2.jpg', bannerHeadtext:'Second slide label'}
  ]
  // public productLists = [
  //   {prodClass:'carousel-item active',
  //     productImages: [
  //       {prodId:1, prodName:'Double 2 RoundNeck', prodImage:this.communityLogo + 'rn/double2_1.jpg', prodPrice:135, prodRatingCount:43},
  //       {prodId:2, prodName:'Cool Soft RN', prodImage:this.communityLogo + 'rn/double2_2.jpg', prodPrice:140, prodRatingCount:58}
  //     ]
  //   },
  //   {prodClass:'carousel-item',
  //     productImages: [
  //       {prodId:1, prodName:'Double 2 RoundNeck', prodImage:this.communityLogo + 'rn/double2_1.jpg', prodPrice:135, prodRatingCount:43},
  //       {prodId:2, prodName:'Cool Soft RN', prodImage:this.communityLogo + 'rn/double2_2.jpg', prodPrice:140, prodRatingCount:58}
  //     ]
  //   }
  // ]
  constructor() { }

  ngOnInit() {
    
  }
  


}
