import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
  apiModelUrl = "http://localhost:8000/model";
  apiBrandUrl = "http://localhost:8000/brand";
  apiNameUrl = "http://localhost:8000/vehicle";

  public getAllModel() {
    return this.http.get(`${this.apiModelUrl}`);
  }
  public getAllBrand() {
    return this.http.get(`${this.apiBrandUrl}`);
  }
  public getAllVehicleName(){
    return this.http.get(`${this.apiNameUrl}`);
  }
}
