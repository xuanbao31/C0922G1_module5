import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {};
  categoryList: Category[] = [];
  productUpdateForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  })
  id: any;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(paramMap.get("id"))
      if (this.id != null) {
        this.getProduct(this.id);
      }
    })

  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(next => {
      this.categoryList = next;
    })
  }

  submit() {

  }


  private getProduct(id: number) {
    return this.productService.findById(id).subscribe(next => {
      // console.log(next);
      this.productUpdateForm.patchValue(next);
    })
  }

  comparaFn(o1: Category, o2: Category): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  update(id: number) {
    if (this.productUpdateForm != undefined && id != null) {
      const product = this.productUpdateForm.value;
      // console.log(product);
      this.productService.updateProduct(id, product).subscribe(next => {
        if (this.productUpdateForm != undefined) {
          this.productUpdateForm.reset();
          this.router.navigateByUrl("/");
        //   console.log(next)
          alert("oke")
        }
      }, errors => {
        this.router.navigateByUrl("/update")
        alert("loi roi ne")
      })
    }
  }
}
