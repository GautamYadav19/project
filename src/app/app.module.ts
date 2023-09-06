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
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { WrapItemsComponent } from './components/header/wrap-items/wrap-items.component';
import { ShopComponent } from './components/shop/shop.component';
import { TopInterestingProductComponent } from './components/Product/product-items/top-interesting-product/top-interesting-product.component';
import { ScrollerProductsComponent } from './components/Product/product-items/scroller-products/scroller-products.component';
import { FourInOneProductsComponent } from './components/Product/product-items/four-in-one-products/four-in-one-products.component';
import { SixInOneProductsComponent } from './components/Product/product-items/six-in-one-products/six-in-one-products.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntregatedProductSilderComponent } from './components/Product/product-detials/intregated-product-silder/intregated-product-silder.component';
import { ProductWishListComponent } from './components/Product/product-wish-list/product-wish-list.component';
import { FormsModule } from '@angular/forms';
import { AddAccessoriesProductComponent } from './components/Product/add-accessories-product/add-accessories-product.component';
import { CompareWithSimilarProductsComponent } from './components/Product/compare-with-similar-products/compare-with-similar-products.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CommonProductFrameComponent } from './components/Product/product-wish-list/common-product-frame/common-product-frame.component';
import { AddToCartProductComponent } from './components/Product/add-to-cart-product/add-to-cart-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    ProductItemsComponent,
    ProductDetialsComponent,
    ProductCreateComponent,
    ProductEditComponent,
    HeaderComponent,
    SearchBarComponent,
    NavbarComponent,
    WrapItemsComponent,
    ShopComponent,
    TopInterestingProductComponent,
    ScrollerProductsComponent,
    FourInOneProductsComponent,
    SixInOneProductsComponent,
    FooterComponent,
    IntregatedProductSilderComponent,
    ProductWishListComponent,
    AddAccessoriesProductComponent,
    CompareWithSimilarProductsComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    CommonProductFrameComponent,
    AddToCartProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
