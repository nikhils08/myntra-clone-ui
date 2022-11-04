import { Component, OnInit } from '@angular/core';
import { BagItem, BagServiceService } from 'src/app/services/bag-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private bagService: BagServiceService) { }

  bagItems: BagItem[] = [];
  totalQuantity: number = 0;

  ngOnInit(): void {
    this.bagService.getBagItems().subscribe((items) => {
      this.bagItems = items.products;
      this.bagItems.map((currentProduct) => {
        console.log("Hi");
      })
    })
  }

}
