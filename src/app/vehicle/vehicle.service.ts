import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Vehicle = {
  recordId: number,
  registrarName: string,
  mobileNumber: string,
  vehicleName: string,
  brandName: string,
  modelName: string,
  year: number,
  cost: number,
  description: string
}

export type Model = {
  brandName: string,
  modelName: string,
  year: number,
  cost: number,
  description: string
}
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  public baseUrl ="http://localhost:8000/";
  public apiModelUrl = "http://localhost:8000/model";
  public apiBrandUrl = "http://localhost:8000/brand";
  public apiNameUrl = "http://localhost:8000/vehicle";
  public apiRegistrarUrl = "http://localhost:8000/record";
  constructor(private http: HttpClient) { }
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
