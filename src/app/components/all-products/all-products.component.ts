import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/custom-data/product';
import { ALL_PRODUCTS } from 'src/app/custom-data/products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  toShowProducts = ALL_PRODUCTS;
  brandList: any[] | undefined;
  fitList: any[] | undefined;
  minPrice: number = 0;
  maxPrice: number = 99999;
  fitFilterActive: boolean = false;


  selectedBrand = [""];
  selectedFits = [""];
  selectedPriceRange: any = 0;

  constructor() { }

  ngOnInit(): void {
    this.setBrandValues();
    this.setFitValues();
    this.setPriceValues();
    this.selectedPriceRange = this.maxPrice;
  }

  toggleFilter(): void {
    this.fitFilterActive = !this.fitFilterActive;
  }

  setPriceValues(): void {
    this.minPrice = Math.min(...(ALL_PRODUCTS.map((currentProduct) => currentProduct.currentPrice)))
    this.maxPrice = Math.max(...(ALL_PRODUCTS.map((currentProduct) => currentProduct.currentPrice))) + 100;
  }

  setBrandValues(): void {
    this.brandList = [... new Set(ALL_PRODUCTS.map((currentProduct) => currentProduct.brand))];
  }

  setFitValues(): void {
    this.fitList = [... new Set(ALL_PRODUCTS.map((currentProduct) => currentProduct.fitType))];
  }

  onFitSelect(event: any): void {
    if (event.target.checked === true) {
      this.selectedFits?.push(event.target.value.toString().toLowerCase());
    }

    else {
      const itemToRemoveIndex = this.selectedFits?.indexOf(event.target.value.toLowerCase()) || -1;
      if (itemToRemoveIndex !== -1) {
        this.selectedFits?.splice(itemToRemoveIndex, 1);
      }
    }

    this.applyAllFilters();
  }


  onBrandSelect(event: any): void {

    if (event.target.checked === true) {
      this.selectedBrand?.push(event.target.value.toString().toLowerCase());
    }

    else {
      const itemToRemoveIndex = this.selectedBrand?.indexOf(event.target.value.toLowerCase()) || -1;
      if (itemToRemoveIndex !== -1) {
        this.selectedBrand?.splice(itemToRemoveIndex, 1);
      }
    }

    this.applyAllFilters();
  }

  applyAllFilters(): void {

    console.log(this.selectedBrand, this.selectedFits);

    let brandFilteredProducts = this.applyBrandFilter();
    let fitFilteredProducts = this.applyFitFilter(brandFilteredProducts);
    let applyPriceFilters = this.applyPriceFilter(fitFilteredProducts);
    this.toShowProducts = applyPriceFilters;
  }


  cleanProducts(): void {
    this.toShowProducts = [];
  }

  applyBrandFilter(): Product[] {

    let currentProducts = ALL_PRODUCTS;

    if (this.selectedBrand && this.selectedBrand.length > 1) {
      currentProducts = [];
      ALL_PRODUCTS.map((currentProduct) => {
        this.selectedBrand?.map((currentBrand) => {
          if (currentBrand && currentBrand.toLowerCase() === currentProduct.brand.toLowerCase()) {
            currentProducts.push(currentProduct)
          }
        })
      })
      console.log(currentProducts);
    }
    return currentProducts;
  }

  applyFitFilter(filteredProducts: Product[]): Product[] {

    let currentProducts = filteredProducts;

    if (this.selectedFits && this.selectedFits.length > 1) {
      currentProducts = []
      filteredProducts.map((currentProduct) => {
        this.selectedFits?.map((currentFit) => {
          if (currentFit && currentFit.toLowerCase() === currentProduct.fitType.toLowerCase())
            currentProducts.push(currentProduct);
        })
      })
    }
    return currentProducts;

  }

  applyPriceFilter(filteredProducts: Product[]): Product[] {
    return filteredProducts.filter((currentProduct) => currentProduct.currentPrice <= this.selectedPriceRange);
  }

}
