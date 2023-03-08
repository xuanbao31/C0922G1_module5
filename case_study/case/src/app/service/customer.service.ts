import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private HttpClient: HttpClient) {
  }

  URL = ("http://localhost:3000/customer")

  getAllCustomer(): Observable<Customer[]> {
    return this.HttpClient.get<Customer[]>(this.URL);
  }

}
