import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  product:Product={id:1};

  constructor(private productService: ProductService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.productService.getAll();
  }
  deleteProduct(id: any) {
    this.productService.deleteById(parseInt(id));
    this.router.navigateByUrl("/product");
    alert("Xóa thành công");
  }
}
