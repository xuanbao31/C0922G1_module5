import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product:Product |null={};
  productForm:FormGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    price:new FormControl(),
    description:new FormControl(),
  })
  constructor(private productService:ProductService,private router:Router,private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data=>{
      const id=data.get("id");
      this.product=this.productService.findById(Number(id));
      if (this.product!=null){
        this.productForm.patchValue(this.product);
      }
      console.log(this.product);
    },error => {},()=>{})
  }

  submit(){
    this.product=this.productForm.value;
    this.productService.updateProduct(this.product);
    console.log(this.product);
    this.router.navigateByUrl("/product");
    alert("Bạn Đã Chỉnh Sửa Thành Công");
  }


}
