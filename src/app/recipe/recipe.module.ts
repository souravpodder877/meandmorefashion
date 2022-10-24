import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChickenItemsComponent } from './chicken-items/chicken-items.component';
import { ContinentalComponent } from './continental/continental.component';
import { MuttonItemComponent } from './mutton-item/mutton-item.component';
import { NorthIndianItemComponent } from './north-indian-item/north-indian-item.component';
import { RecipeContComponent } from './recipe-cont/recipe-cont.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeLeftComponent } from './recipe-left/recipe-left.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeRightComponent } from './recipe-right/recipe-right.component';
import { SouthindianItemComponent } from './southindian-item/southindian-item.component';
import { VegitemComponent } from './vegitem/vegitem.component';
import { CommonAngularDashboardModule } from '../modules/common-angular-dashboard/common-angular-dashboard.module';
import { CommonAngularModule } from '../modules/common-angular/common-angular.module';
import { Router, RouterModule, Routes } from '@angular/router';

const recipeComponents = [
    RecipeContComponent,
    RecipeListComponent,
    RecipeLeftComponent,
    RecipeRightComponent,
    ChickenItemsComponent,
    MuttonItemComponent,
    VegitemComponent,
    SouthindianItemComponent,
    NorthIndianItemComponent,
    ContinentalComponent,
    RecipeDetailsComponent,
]
const recipeRoutes: Routes = [
    {path:'', component:RecipeContComponent, children:[
      {path:'chicken', component:ChickenItemsComponent},
      {path:'mutton', component:MuttonItemComponent},
      {path:'veg', component:VegitemComponent},
      {path:'southindian', component:SouthindianItemComponent},
      {path:'northindian', component:NorthIndianItemComponent},
      {path:'continental', component:ContinentalComponent}
    ]},
    
]

@NgModule({
  declarations: [
    recipeComponents,
  ],
  imports: [
    CommonModule,
    CommonAngularModule,
    CommonAngularDashboardModule,
    RouterModule.forChild(recipeRoutes)
  ],
  exports:[
    RouterModule
  ]

})
export class RecipeModule { }
