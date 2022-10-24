import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-new-products-arrival',
  templateUrl: './new-products-arrival.component.html',
  styleUrls: ['./new-products-arrival.component.scss']
})
export class NewProductsArrivalComponent implements OnInit {
  public communityLogo = '../../../assets/images/';
  public newProduct = this.communityLogo + 'dailyprod1.png';
  public newProductArrivalArrays:any = [];
  
  // ]
  constructor(private _httpProductService:ProductServiceService) { }
  
  ngOnInit() {
    // this._httpProductService.newProductDataFetchMethods().subscribe(
    //   response => this.newProductArrivalArrays = response,
    // )
    this.newProductArrivalArrays = this._httpProductService.newProductDataFetchMethods();
  }

}
