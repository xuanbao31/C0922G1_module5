import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) {
  }

  URL = ("http://localhost:3000/facility")

  getAllFacility(): Observable<any> {
    return this.httpClient.get<Facility[]>(this.URL);
  }
  deleteFacility(id: number): Observable<Facility[]> {
    return this.httpClient.delete<Facility[]>(this.URL + "/" + id);
  }
  saveFacility(facility:Facility):Observable<Facility[]>{
    return this.httpClient.post<Facility[]>(this.URL,facility);
  }

}
