import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ImageSliderComponent } from 'src/app/components/image-slider/image-slider.component';
import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from 'src/app/def/footer/footer.component';
import { HeaderComponent } from 'src/app/def/header/header.component';
import { LeftpanelComponent } from 'src/app/def/leftpanel/leftpanel.component';
import { NavComponent } from 'src/app/def/nav/nav.component';
import { RightadpanelComponent } from 'src/app/def/rightadpanel/rightadpanel.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { ButtonComponent } from 'src/app/components/button/button.component';


const Moduleinstace = [
  AngularMaterialModule,
  FormsModule,
  RouterModule,
  HttpClientModule,
  NgbModule
]
const componentInstance = [
  ImageSliderComponent,
  ProductsListComponent,
  HeaderComponent,
  FooterComponent,
  LeftpanelComponent,
  NavComponent,
  RightadpanelComponent,
  PageNotFoundComponent,
  ButtonComponent
]

@NgModule({
  declarations: [
    componentInstance
  ],
  imports: [
    CommonModule,
    Moduleinstace,
    
  ],
  exports: [
    CommonModule,
    Moduleinstace,
    componentInstance
  ]
})
export class CommonAngularModule { }
