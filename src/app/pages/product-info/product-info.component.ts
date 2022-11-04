import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/custom-data/product';
import { ALL_PRODUCTS } from 'src/app/custom-data/products';
import { BagServiceService } from 'src/app/services/bag-service.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  selectedProduct: Product | undefined;
  selectedSize: number = 0;

  constructor(private route: ActivatedRoute, private bagService: BagServiceService) { }

  ngOnInit(): void {
    this.selectedProduct = ALL_PRODUCTS.filter((currentProd) => currentProd.id === parseInt(this.route.snapshot.paramMap.get('productId') || ''))[0]
  }

  setActiveSize(activeSize: number): void {
    this.selectedSize = activeSize;

    const allButtons = document.getElementsByClassName("size-button") as HTMLCollectionOf<HTMLButtonElement>;
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.remove("size-button-active");
    }

    let buttonById = document.getElementById("size-button-" + this.selectedSize) as HTMLButtonElement;
    buttonById.classList.add("size-button-active");
  }

  addToBag(): void {
    this.bagService.addToBag(this.selectedProduct?.id || 0, this.selectedSize);
  }

}
