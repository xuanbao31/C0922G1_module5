import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {Category} from "../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../service/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product[] = [];
  category: Category[] = [];
  productForm: FormGroup;

  constructor(private httpClient: HttpClient,
              private productService: ProductService,
              private categoryService:CategoryService,
              private router: Router) {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
    })
  }

  ngOnInit(): void {
   this.categoryService.getAll().subscribe(next=>{
     this.category=next;
   })

  }

  submit() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.save(product).subscribe(next => {
      console.log(next);
      this.router.navigateByUrl("/");
      alert("Create Complete");
    })
  }

}
