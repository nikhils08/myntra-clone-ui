import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartBagComponent } from './components/cart-bag/cart-bag.component';
import { ProductComponent } from './components/product/product.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ShirtsComponent } from './pages/shirts/shirts.component';
import { FormsModule } from '@angular/forms';
import { ProductInfoComponent } from './pages/product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartBagComponent,
    ProductComponent,
    AllProductsComponent,
    ShirtsComponent,
    ProductInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
