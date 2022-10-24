import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor() { }
  public rhProductArray:[] = [];
  public myReactiveFormGroup= new FormGroup({
    prodID: new FormControl(''),
    prodName: new FormControl(''),
    ProdCat: new FormControl(''),
    prodType: new FormControl(''),
    prodSize: new FormControl(''),
    prodDistributer: new FormControl(''),
    prodColorRange: new FormControl(''),
    prodDis: new FormControl(''),
    prodPrice: new FormControl(''),
    prodFile: new FormControl(''),
  });
  productPostMethod(myReactiveFormGroup){
    console.log(this.myReactiveFormGroup.value);
    this.rhProductArray.push();
  }
  deleteProd(id){
    console.log('hi');
  }
  ngOnInit() {
    
  }
  

}
