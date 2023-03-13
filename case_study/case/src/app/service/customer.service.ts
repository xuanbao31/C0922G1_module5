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

  deleteCustomer(id: number): Observable<Customer[]> {
    return this.HttpClient.delete<Customer[]>(this.URL + "/" + id);
  }

  saveCustomer(customer: any) {
    return this.HttpClient.post<Customer>(this.URL, customer);
  }

  findById(id: number) {
    return this.HttpClient.get<Customer[]>(this.URL + "/" + id);
  }

  updateCustomer(id: number, customer: Customer) {
    return this.HttpClient.patch<Customer>(this.URL + "/" + id, customer);
  }
}
