import { Component, OnInit } from '@angular/core';
import { BagItem, BagServiceService } from 'src/app/services/bag-service.service';

@Component({
  selector: 'app-cart-bag',
  templateUrl: './cart-bag.component.html',
  styleUrls: ['./cart-bag.component.css']
})
export class CartBagComponent implements OnInit {

  constructor(private bagService: BagServiceService) { }
  bagItems: BagItem[] = [];

  ngOnInit(): void {
    this.bagService.getBagItems().subscribe((items) => {
      this.bagItems = items.products;
    })
  }

  toggleDropdown(): void {
    let modal = document.getElementById("myModal") as HTMLElement;
    modal.style.display = "block";
  }

  removeItem(index: number): void {
    this.bagService.removeItem(index);
    this.bagService.getBagItems().subscribe((items) => {
      this.bagItems = items.products;
    })
  }

  closeModal() {
    let modal = document.getElementById("myModal") as HTMLElement;
    modal.style.display = "none";
  }

}
