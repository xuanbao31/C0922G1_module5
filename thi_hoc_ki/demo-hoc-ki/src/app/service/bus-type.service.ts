import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BusType} from "../model/bus-type";

@Injectable({
  providedIn: 'root'
})
export class BusTypeService {

  constructor(private httpClient: HttpClient) {
  }

  URL = ('http://localhost:3000/busType');

  getAllBusType(): Observable<BusType[]> {
    return this.httpClient.get<BusType[]>(this.URL);
  }
}
