import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
  apiModelUrl = "http://localhost:8000/model";

  public getAllModel() {
    return this.http.get(`${this.apiModelUrl}`);
  }
}
