import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';


// routing with id

@Component({
  selector: 'app-topoffer',
  templateUrl: './topoffer.component.html',
  styleUrls: ['./topoffer.component.scss']
})
export class TopofferComponent implements OnInit {
  public communityLogo:string = '../../../assets/images/';
  public greatDeal:string = this.communityLogo + 'flash_sale.jpg';
  public dailyDealimage1:string = this.communityLogo+ 'dailyprod1.png';
  public topOffers = []
  
  // routing with id
  constructor(private router : Router, private _topOffer:ProductServiceService) { }
  
  ngOnInit() {
    this._topOffer.topOfferfetchDataMethods().subscribe(
      response => this.topOffers = response,
    )
  }
  topOfferDetails(id){
    this.router.navigate(['topofferDetails', id]);
  }

}
