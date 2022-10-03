import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public sample: any;
  public model_info = [
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
      this.sample = result;
      console.log(this.sample);
    })
  }

  ngOnInit(): void {
  }

}
