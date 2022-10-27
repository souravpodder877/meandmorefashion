import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminProductDataService } from '../admin-product-data.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private _adminProductDataService:AdminProductDataService) { }

  public rhProductArray:FormGroup[] = [];
  public myReactiveFormGroup= new FormGroup({
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
  public reactiveFormData = this.myReactiveFormGroup.value;
  productPostMethod(){
    console.log(this.myReactiveFormGroup.value);
    this._adminProductDataService.adminProductDataAddServer(this.reactiveFormData).subscribe(
      (resp) => console.log('push', resp)
    )
    // push to table local
    this.rhProductArray.push(this.reactiveFormData);
  }
  deleteProd(id){
    console.log('hi');
  }
  ngOnInit() {
    
  }
  

}
