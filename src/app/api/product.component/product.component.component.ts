import { IProduct } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/api//product.service';

@Component({
  selector: 'app-product.component',
  templateUrl: './product.component.component.html',
  styleUrls: ['./product.component.component.css']
})
export class ProductComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }
}
