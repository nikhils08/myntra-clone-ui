import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/custom-data/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  sizes: String = "";
  slidesStore = [{
    path: ""
  }];
  isImageHovered = false;
  imageHoverInterval: any;

  @Input() currentProduct: Product | undefined;

  constructor() { }

  ngOnInit(): void {
    this.sizes = this.sizeArrayToString();
  }

  sizeArrayToString(): string {
    var sizes = this.currentProduct?.sizes.map(s => " " + s.size).toString();
    if (sizes)
      return sizes.trim();
    return "";
  }

  mouseHovered(): void {
    this.isImageHovered = true;
  }

  mouseOut(): void {
    this.isImageHovered = false;
  }

}
