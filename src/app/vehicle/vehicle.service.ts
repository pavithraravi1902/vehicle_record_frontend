import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Vehicle = {
  record_id: number,
  registrar_name: string,
  mobile_number: string,
  vehicle_name: string,
  brand_name: string,
  model_name: string,
  year: number,
  cost: number,
  description: string
}

export type Model ={
  brand_name: string,
  model_name: string,
  year: number,
  cost: number,
  description: string
}
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }
  apiModelUrl = "http://localhost:8000/model";
  apiBrandUrl = "http://localhost:8000/brand";
  apiNameUrl = "http://localhost:8000/vehicle";
  apiRegistrarUrl = "http://localhost:8000/record";

  public getAllModel() {
    return this.http.get(`${this.apiModelUrl}`);
  }
  public getModelById(id: number) {
    return this.http.get(`${this.apiModelUrl}/${id}`);
  }
  public getAllBrand() {
    return this.http.get(`${this.apiBrandUrl}`);
  }
  public getAllVehicleName() {
    return this.http.get(`${this.apiNameUrl}`);
  }
  public getRegistrarRecord() {
    return this.http.get(`${this.apiRegistrarUrl}`);
  }
  public getRegistrarRecordById(id: number) {
    return this.http.get(`${this.apiRegistrarUrl}/${id} `);
  }
  public createRegistrarRecord(data: any) {
    return this.http.post(`${this.apiRegistrarUrl}`, data);
  }
  public updateRecord(id: number, data: any) {
    return this.http.put(`${this.apiRegistrarUrl}/${id}`, data);
  }
  public deleteRecord(id: number) {
    return this.http.delete(`${this.apiRegistrarUrl}/${id}`);
  }
}
