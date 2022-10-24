import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { HomeComponent } from './def/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopDealsComponent } from './offerproducts/top-deals/top-deals.component';
import { GiftspecialComponent } from './offerproducts/giftspecial/giftspecial.component';
import { SpecialofferComponent } from './offerproducts/specialoffer/specialoffer.component';
import { OfferBannerComponent } from './def/offer-banner/offer-banner.component';
import { ContactComponent } from './def/contact/contact.component';
import { ShoppinglistComponent } from './shoppinglists/shoppinglist/shoppinglist.component';
import { TopOfferDetailsComponent } from './top-offer-details/top-offer-details.component';
import { MsgServiceService } from './services/log-service.service';

import { ProductServiceService } from './services/product-service.service';
import { TestComponent } from './components/test/test.component';
import { CommonAngularModule } from './modules/common-angular/common-angular.module';
import { LogModule } from './logs/log.module';
import { AdminPanelModule } from './adminPanel/admin-panel.module';
import { CommonAngularDashboardModule } from './modules/common-angular-dashboard/common-angular-dashboard.module';
import { FormInputModule } from './modules/form-input/form-input.module';

import { RecipeModule } from './recipe/recipe.module';
import { ProductModule } from './products/product.module';
import { AdminProductService } from './products/admin-product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpecialofferComponent,
    TopDealsComponent,
    GiftspecialComponent,
    OfferBannerComponent,
    ContactComponent,
    ShoppinglistComponent,
    TopOfferDetailsComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NgbModule,
    AppRoutingModule,
    FormInputModule,
    
    CommonAngularModule,
    CommonAngularDashboardModule,
    LogModule,
    AdminPanelModule,
    RecipeModule,
    ProductModule,
    // CarouselModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [MsgServiceService, AdminProductService, ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
