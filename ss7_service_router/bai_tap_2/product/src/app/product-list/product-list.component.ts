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
  productList: Product[]=[];
  item:Product={};
  name = '';
  id = -1;
  check(id:number,name: string) {
    this.id= id;
    this.name = name;
  }
  constructor(private productService: ProductService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
   this.productService.getAll().subscribe(next=>{
     this.productList=next;
   })
  }
  delete(){
      this.productService.delete(this.id).subscribe(next=>{
        alert("deleteComplete");
        this.ngOnInit();
      })
  }
  // deleteProduct(id: any) {
  //   this.productService.deleteById(parseInt(id));
  //   this.router.navigateByUrl("/product");
  //   alert("Xóa thành công");
  // }
}
