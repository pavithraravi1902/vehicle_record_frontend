import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { VehicleService, Model } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  public record: any;
  public modelName: any;
  public model: Model = {} as Model;
  public model_record: any;
  public brandName: any;
  public brand_record: any;
  public vehicleName: any;
  public vehicle_record: any;
  public page: number = 1;
  public key: string = 'id';
  public reverse: boolean = false;
  constructor(private service: VehicleService, private router: Router, private route: ActivatedRoute) {
    this.service.getAllBrand().subscribe((result) => {
      this.brandName = result;
      this.brand_record = this.brandName.data;
      console.log(this.brand_record);
    });
    this.service.getAllVehicleName().subscribe((result) => {
      this.vehicleName = result;
      this.vehicle_record = this.vehicleName.data;
      console.log(this.vehicle_record);
    });
  }

  ngOnInit(): void {
    this.service.getAllModel().subscribe((result) => {
      this.record = result;
      this.model_record = this.record.data;
      console.log(this.model_record);
    });
  }

  search() {
    if (this.modelName == "") {
      this.ngOnInit();
    } else {
      this.model_record = this.model_record.filter((res: any) => {
        return res.model.toLocaleLowerCase().match(this.modelName.toLocaleLowerCase());
      })
    }
  }

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  add() {
    this.router.navigate(["vehicle/create"]);
  }
  onView(id: any) {
    this.router.navigateByUrl(`vehicle/${id}/show`);
  }
  onBack(){
    this.router.navigateByUrl(`vehicle`);
  }
}
