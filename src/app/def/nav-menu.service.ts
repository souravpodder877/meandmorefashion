import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {
  constructor() { }
  navMenuServiceMethods(){
    return [
      {navName:'Men Fashion', navSubMenus:[
        {navSubHeading:'Top Wear', navSubWears:[
          {navChildName:'Roundneck Tees', link:'products/roundnecktshirts'},
          {navChildName:'Tshirt', link:'/tshirts'},
          {navChildName:'Casual Shirts', link:'/casualshirts'},
          {navChildName:'Formal Shirts', link:'/formalshirts'},
          {navChildName:'Smart Kollars', link:'/smartkollars'},
          {navChildName:'Polo Neck', link:'/polonecks'},
        ]},
        {navSubHeading:'Bottom Wear', navSubWears:[
          {navChildName:'Trousers', link:'/trousers'},
          {navChildName:'Shorts', link:'/shorts'},
          {navChildName:'Boxer', link:'/boxer'},
          {navChildName:'Joggers', link:'/joggers'},
          {navChildName:'Cotton Pants', link:'/cottonpants'},
        ]},
        {navSubHeading:'Winter Care', navSubWears:[
          {navChildName:'SweatShirts', link:'/sweatshirts'},
          {navChildName:'Jackets', link:'/jackets'},
          {navChildName:'Winter Coats', link:'/winterCoats'},
          {navChildName:'Roundneck FullTshirt', link:'/roundneckfulls'},
          {navChildName:'Sports Wear', link:'/sports'},
          {navChildName:'Thermals', link:'/thermals'},
        ]},
        {navSubHeading:'Foot Wear', navSubWears:[
          {navChildName:'Casual Shoes', link:'/casualshoes'},
          {navChildName:'Sports Shoes', link:'/Sports Shoes'},
          {navChildName:'Formal Shoes', link:'/formalshoes'},
          {navChildName:'Sneakers', link:'/sneakers'},
          {navChildName:'Sandals & Floaters', link:'/sandals'},
          {navChildName:'Socks', link:'/socks'},
        ]},
        {navSubHeading:'Ethenic Wear', navSubWears:[
          {navChildName:'Punjabi', link:'/punjabis'},
          {navChildName:'Suits', link:'/suits'},
          {navChildName:'Sherwani', link:'/sherwanis'},
          {navChildName:'Neheru Jackets', link:'/neheruJackets'},
        ]},
        {navSubHeading:'Gadgets', navSubWears:[
          {navChildName:'Smart Watches', link:'/watches'},
          {navChildName:'Headphones', link:'/headphones'},
          {navChildName:'Speakers', link:'/speakers'},
          {navChildName:'Perfumes', link:'/perfumes'},
          {navChildName:'Wallet', link:'/wallets'},
        ]},
        {navSubHeading:'Rain Guard', navSubWears:[
          {navChildName:'Rain Coat', link:'/raincoats'},
          {navChildName:'Rain Shoes', link:'/rainshoes'},
        ]},
      ]},
      {
        navName:'Women Fashion', navSubMenus:[
          {navSubHeading:'Indian & Fusion', navSubWears:[
            {navChildName:'Kurtas $ Suits', link:'/Kurtas'},
            {navChildName:'Kurtis, Tunic & Tops ', link:'/kurtisTunics'},
            {navChildName:'Sarees', link:'/Sarees'},
            {navChildName:'Ethnic Wear ', link:'/ethnics'},
          ]},
          {navSubHeading:'Weastern Wear', navSubWears:[
            {navChildName:'Dresses', link:'/weasternDresses'},
            {navChildName:'Tops', link:'/tops'},
            {navChildName:'Tshirts', link:'/womenTshirts'},
            {navChildName:'Jeans', link:'/WomenJeans'},
          ]},
          {navSubHeading:'Bottom Wears', navSubWears:[
            {navChildName:'Skirts', link:'/skirts'},
            {navChildName:'Palazzos', link:'/palazzos'},
            {navChildName:'Leggins', link:'/leggins'},
            {navChildName:'Lehenga Cholis', link:'/lehengacholis'},
          ]},
          {navSubHeading:'Footwears', navSubWears:[
            {navChildName:'Flats', link:'/womenFlats'},
            {navChildName:'Casual Shoes', link:'/womenCasualsShoes'},
            {navChildName:'Heels', link:'/heels'},
            {navChildName:'Snikkers', link:'/womenSnikkers'},
          ]},
        ]
      },
      // {navName:'Accessories', navSubMenus:[
      //   {navSubHeading:'Accessories', navSubWears:[
      //     {navChildName:'Smart Watches', link:'/watches'},
      //     {navChildName:'Headphones', link:'/headphones'},
      //     {navChildName:'Speakers', link:'/speakers'},
      //   ]},
      // ]},
    ]
  }
}
