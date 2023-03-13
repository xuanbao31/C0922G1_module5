import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product | null = {};
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 2400000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IPhone X',
    price: 968000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  findById(number: number): Product | null {
    let temp = this.products.filter(element => element.id === number);
    if (temp.length == 0) {
      return null;
    }
    return temp[0];
  }

  saveProduct(product) {
    this.products.push(product);
  }
  updateProduct(product: any) {
    let length = this.products.length;
    for (let i = 0; i < length; i++) {
      if (product.id == this.products[i].id) {
        this.products[i] = product;
        break;
      }
    }
  }
  deleteById(id: number) {
    this.product = this.findById(id);
    let length = this.products.length;
    for (let i = 0; i < length; i++) {
      if (this.products[i].id == this.product?.id) {
        this.products.splice(i, 1);
        break;
      }

    }
  }
}
