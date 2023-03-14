import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FacilityType} from "../model/facility-type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>("http://localhost:3000/facilityType")
  }
}
