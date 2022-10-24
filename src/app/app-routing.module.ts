import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { ContactComponent } from './def/contact/contact.component';
import { HomeComponent } from './def/home/home.component';
import { TopofferComponent } from './offerproducts/topoffer/topoffer.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoundneckTshirtComponent } from './products/roundneck-tshirt/roundneck-tshirt.component';
import { TopOfferDetailsComponent } from './top-offer-details/top-offer-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: '', loadChildren:'./logs/log.module#LogModule'},
  // route with id
  {path:'topoffer', component:TopofferComponent},
  {path:'topofferDetails/:id', component:TopOfferDetailsComponent},
  // route with id
  // { 
  //   path: 'recipe', 
  //   loadChildren: () => import(`./recipe/recipe.module`).then(
  //     module => module.RecipeModule
  //   )
  // },
  {path: 'recipe', loadChildren:'./recipe/recipe.module#RecipeModule'},
  {path: 'admin', loadChildren:'./adminPanel/admin-panel.module#AdminPanelModule'},
  {path:'products', loadChildren:'./products/product.module#ProductModule'},
  {path: 'contact', children:[
    {path:'', component:ContactComponent},
    {path:'test', component:TestComponent},
  ]},
  {path:'test', component:TestComponent},
  // {path:'roundneckTshirts', component:RoundneckTshirtComponent},
  {path:'**', component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration:'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

