import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<RentType[]> {
    return this.httpClient.get<RentType[]>("http://localhost:3000/rentType")
  }
}
