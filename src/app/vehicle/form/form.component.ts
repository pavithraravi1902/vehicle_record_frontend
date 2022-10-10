import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService, Vehicle } from '../vehicle.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public modelInfo: any;
  public modelData: any;
  public brandInfo: any;
  public brandData: any;
  public vehicleInfo: any;
  public vehicleData: any;
  public registrarRecord: any;
  public vehicle: Vehicle = {} as Vehicle;
  public registrarData: any;
  public routeParameter: number = -1;
  public brand: any;
  public result: any;
  public vehicleRecord: any;

  public get RouteParameter(): number {
    return this.routeParameter;
  }

  constructor(private service: VehicleService, private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe((parameters) => {
      if (parameters["id"]) {
        this.routeParameter = Number(parameters["id"]);
      }
    });
    this.service.getAllModel().subscribe((result) => {
      this.modelInfo = result;
      this.modelData = this.modelInfo.data;
      //console.log(this.model_data);
    });
    this.service.getAllBrand().subscribe((result) => {
      this.brandInfo = result;
      this.brandData = this.brandInfo.data;
      console.log(this.brandData, "pavi");
    });
    this.service.getAllVehicleName().subscribe((result) => {
      this.vehicleInfo = result;
      this.vehicleData = this.vehicleInfo.data;
      this.onSelect(this.vehicleData.vehicle_id);
      console.log(this.vehicleData)
      this.onSelect(this.vehicleData.vehicle_id);
    });
    //this.vehicle = this.registrar_record.data;
  }

  ngOnInit(): void {
    if (this.routeParameter > 0) {
      this.service.getRegistrarRecordById(this.routeParameter).subscribe((result) => {
        this.registrarRecord = result;
        this.vehicleRecord = this.registrarRecord.data;
        this.vehicle = this.vehicleRecord[0];
        console.log(this.vehicle);
      });
    }
    this.onSelect(this.brandData.brand_id);
  }

  onSave() {
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

  onCancel() {
    this.router.navigate(["vehicle"]);
  }

  onSelect(id: any) {
    this.result = this.modelData.filter((item: any) => item.brand_id == id);
    console.log(this.result, "result");
  }
}
