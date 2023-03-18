import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Bus} from "../model/bus";

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private httpClient: HttpClient) {
  }
URLofFR=('http://localhost:8080/bus/list');
  URL = ('http://localhost:3000/bus');

  getAllBus(): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>(this.URLofFR);
  }

  deleteBus(id: number): Observable<Bus[]> {
    return this.httpClient.delete<Bus[]>(this.URL + '/' + id);
  }

  findById(id: number): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>(this.URL + '/' + id);
  }

  updateBus(id: number, bus: Bus): Observable<Bus[]> {
    return this.httpClient.patch<Bus[]>(this.URL + '/' + id, bus);
  }

  saveBus(id: number, bus: Bus): Observable<Bus[]> {
    return this.httpClient.post<Bus[]>(this.URL + '/' + id, bus);
  }
}
