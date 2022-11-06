import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminProductDataService } from '../admin-product-data.service';
import { roundDataInterface } from '../round.model';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private _adminProductDataService:AdminProductDataService) { }

  public rhProductArray:any = [];
  public myReactiveData= new FormGroup({
    prodID: new FormControl(''),
    prodName: new FormControl(''),
    ProdCatg: new FormControl(''),
    prodType: new FormControl(''),
    prodSize: new FormControl(''),
    prodDistributer: new FormControl(''),
    prodColorRange: new FormControl(''),
    prodDis: new FormControl(''),
    prodPrice: new FormControl(''),
    prodFile: new FormControl(''),
  });
  
  productPostMethod(myReactiveData:roundDataInterface){
    console.log(myReactiveData);
    // push to table local
    this.rhProductArray.push(myReactiveData);
    this._adminProductDataService.adminProductDataAddServer(myReactiveData).subscribe(
      (data) => console.log(data)
    )
    
  }
  deleteProd(id){
    console.log('hi');
  }
  ngOnInit() {
    
  }
  

}
