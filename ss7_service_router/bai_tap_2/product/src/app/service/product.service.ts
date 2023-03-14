import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  URL = ("http://localhost:3000/product")

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL);
  }

  delete(id: number): Observable<Product[]> {
    return this.httpClient.delete<Product[]>(this.URL + "/" + id)
  }
  save(product:Product):Observable<Product[]>{
    return this.httpClient.post<Product[]>(this.URL,product);
  }
  findById(id:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.URL+"/"+id);
  }
  updateProduct(id:number,product:Product):Observable<Product[]>{
    return this.httpClient.put<Product[]>(this.URL+"/"+id,product);
  }
  // findById(number: number): Product | null {
  //   let temp = this.products.filter(element => element.id === number);
  //   if (temp.length == 0) {
  //     return null;
  //   }
  //   return temp[0];
  // }
  //
  // saveProduct(product) {
  //   this.products.push(product);
  // }
  //
  // updateProduct(product: any) {
  //   let length = this.products.length;
  //   for (let i = 0; i < length; i++) {
  //     if (product.id == this.products[i].id) {
  //       this.products[i] = product;
  //       break;
  //     }
  //   }
  // }
  //
  // deleteById(id: number) {
  //   this.product = this.findById(id);
  //   let length = this.products.length;
  //   for (let i = 0; i < length; i++) {
  //     if (this.products[i].id == this.product?.id) {
  //       this.products.splice(i, 1);
  //       break;
  //     }
  //
  //   }
  // }
}
