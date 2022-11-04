import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../custom-data/product';
import { ALL_PRODUCTS } from '../custom-data/products';

export interface BagItem {
  productId: number,
  productSize: number,
  productSizeQuantity: number,
  product: Product
}

@Injectable({
  providedIn: 'root'
})
export class BagServiceService {

  public bagItems: BagItem[] = [];

  constructor() {
    this.bagItems = JSON.parse(localStorage.getItem('items') || '[]');
  }

  public addToBag(productId: number, productSize: number) {

    let itemsMatching = this.bagItems.filter((product) => productId === product.productId && product.productSize === productSize);

    if (itemsMatching.length > 0) {
      this.increaseQuantity(itemsMatching[0].productId, itemsMatching[0].productSize);
    }

    else {
      const currentProd = ALL_PRODUCTS.filter((currentProduct) => currentProduct.id === productId)[0];
      let newItem: BagItem = {
        productId: productId,
        productSize: productSize,
        productSizeQuantity: 1,
        product: currentProd
      }
      this.bagItems?.push(newItem);
    }

    localStorage.setItem('items', JSON.stringify(this.bagItems));
    return this.getBagItems();
  }

  public getBagItems(): Observable<{ products: BagItem[], quantity: number }> {
    // this.addToBag(1, 38);
    let totalQuantity = 0;
    this.bagItems.map((currentItem) => totalQuantity += currentItem.productSizeQuantity);
    return of({ products: this.bagItems, quantity: totalQuantity });
  }

  public increaseQuantity(productId: number, productSize: number): void {
    this.bagItems.map((product) => product.productId === productId && product.productSize == productSize ? product.productSizeQuantity += 1 : 1);
  }

  public removeItem(index: number) {

    console.log(index);

    if (this.bagItems.length == 1)
      this.bagItems = [];

    else {
      if (index != -1)
        this.bagItems.splice(index, 1);
    }
    localStorage.setItem('items', JSON.stringify(this.bagItems));
  }

}
