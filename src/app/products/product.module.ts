import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyDealsComponent } from '../offerproducts/daily-deals/daily-deals.component';
import { TopRatedProducsComponent } from '../offerproducts/top-rated-producs/top-rated-producs.component';
import { TopdisProductsComponent } from '../offerproducts/topdis-products/topdis-products.component';
import { TrendItemsComponent } from '../offerproducts/trend-items/trend-items.component';
import { NewProductsArrivalComponent } from '../offerproducts/new-products-arrival/new-products-arrival.component';
import { NewitemsComponent } from '../offerproducts/newitems/newitems.component';
import { RecentSerchComponent } from '../offerproducts/recent-serch/recent-serch.component';
import { SuggestionComponent } from '../offerproducts/suggestion/suggestion.component';
import { TopBrandsComponent } from '../offerproducts/top-brands/top-brands.component';
import { TopofferComponent } from '../offerproducts/topoffer/topoffer.component';
import { TrendItemLeftComponent } from '../offerproducts/trend-item-left/trend-item-left.component';
import { TshirtArrivalComponent } from '../offerproducts/tshirt-arrival/tshirt-arrival.component';
import { CommonAngularModule } from '../modules/common-angular/common-angular.module';
import { CommonAngularDashboardModule } from '../modules/common-angular-dashboard/common-angular-dashboard.module';
import { HeadingButtonComponent } from '../components/heading-button/heading-button.component';
import { KultiComponent } from './kulti/kulti.component';
import { RouterModule, Routes } from '@angular/router';
import { AllProductListComponent } from './all-product-list/all-product-list.component';
import { RoundneckTshirtComponent } from './roundneck-tshirt/roundneck-tshirt.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';






const productComp= [
  TrendItemsComponent,
  TopRatedProducsComponent,
  TopdisProductsComponent,
  DailyDealsComponent,
  TopofferComponent,
  TrendItemLeftComponent,
  TshirtArrivalComponent,
  NewProductsArrivalComponent,
  NewitemsComponent,
  RecentSerchComponent,
  TopBrandsComponent,
  SuggestionComponent,
  HeadingButtonComponent,
  AllProductListComponent,
  RoundneckTshirtComponent,
  ProductFilterComponent
]

const productRoutes:Routes = [
  {path:'',  children:[
    {path:'', component:AllProductListComponent,},
  ]},
  {path:'roundnecktshirts', component:RoundneckTshirtComponent}
]

@NgModule({
  declarations: [
    productComp,
  ],
  imports: [
    CommonModule,
    CommonAngularModule,
    CommonAngularDashboardModule,
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    productComp,
    RouterModule
  ],
  providers:[
   
  ]
})
export class ProductModule { }
