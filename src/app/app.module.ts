import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductItemsComponent } from './components/Product/product-items/product-items.component';
import { ProductDetialsComponent } from './components/Product/product-detials/product-detials.component';
import { ProductCreateComponent } from './components/Product/product-create/product-create.component';
import { ProductEditComponent } from './components/Product/product-edit/product-edit.component';
import { ProductCardsComponent } from './components/Product/product-items/product-cards/product-cards.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { WrapItemsComponent } from './components/header/wrap-items/wrap-items.component';
import { ShopComponent } from './components/shop/shop.component';
import { TopInterestingProductComponent } from './components/Product/product-items/top-interesting-product/top-interesting-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    ProductItemsComponent,
    ProductDetialsComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductCardsComponent,
    HeaderComponent,
    SearchBarComponent,
    NavbarComponent,
    WrapItemsComponent,
    ShopComponent,
    TopInterestingProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
