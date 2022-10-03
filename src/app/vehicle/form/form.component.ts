import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public model_info: any;
  public model_data: any;
  public brand_info: any;
  public brand_data: any;
  public vehicle_info: any;
  public vehicle_data: any;
  public sample = [
    {
      model_id: 1, model_name: "BMW", model_year: 2000, model_cost: 100000, description: "brand new"
    },
    {
      model_id: 2, model_name: "Maruti", model_year: 2001, model_cost: 150000, description: "brand new car"
    },
    {
      model_id: 3, model_name: "Suzuki", model_year: 2005, model_cost: 160000, description: "brand new suzuki car"
    }
  ]
  constructor(private service: VehicleService, http: HttpClient) {
    this.service.getAllModel().subscribe((result) => {
      this.model_info = result;
      this.model_data = this.model_info.data;
      console.log(this.model_data);
    });
    this.service.getAllBrand().subscribe((result)=>{
      this.brand_info = result;
      this.brand_data = this.brand_info.data;
      console.log(this.brand_data);
    });
    this.service.getAllVehicleName().subscribe((result)=>{
      this.vehicle_info = result;
      this.vehicle_data = this.vehicle_info.data;
      console.log(this.vehicle_data);
    })
  }

  ngOnInit(): void {
  }

}
