import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService, Vehicle } from '../vehicle.service';

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
  public registrar_record: any;
  public vehicle: Vehicle = {} as Vehicle;
  public registrar_data: any;
  public routeParameter: number = -1;

  public get RouteParameter(): number {
    return this.routeParameter;
  }

  constructor(private service: VehicleService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((parameters) => {
      if (parameters["id"]) {
        this.routeParameter = Number(parameters["id"]);
      }
    });
    this.service.getAllModel().subscribe((result) => {
      this.model_info = result;
      this.model_data = this.model_info.data;
    });
    this.service.getAllBrand().subscribe((result) => {
      this.brand_info = result;
      this.brand_data = this.brand_info.data;
    });
    this.service.getAllVehicleName().subscribe((result) => {
      this.vehicle_info = result;
      this.vehicle_data = this.vehicle_info.data;
    });
  }

  ngOnInit(): void {
    if (this.routeParameter > 0) {
      this.service.getRegistrarRecordById(this.routeParameter).subscribe((result) => {
        this.registrar_record = result;
        this.vehicle = this.registrar_record.data;
      });
    }
  }

  save() {
    if (this.routeParameter && this.routeParameter > 0) {
      this.service.updateRecord(this.routeParameter, this.vehicle).subscribe((result) => {
        console.log(result, "update");
        confirm("updated successfully");
        this.router.navigate(["vehicle"]);
      }, (error) => {
        console.log(error);
      })
    } else {
      this.service.createRegistrarRecord(this.vehicle).subscribe((result) => {
        console.log(result, "create");
        confirm("saved successfully");
        this.router.navigate(["vehicle"]);
      }, (error) => {
        console.log(error);
      })
    }
  }

  onCancel(){
    this.router.navigate(["vehicle"]);
  }
}
