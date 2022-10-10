import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService, Model } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  public record: any;
  public modelData: any;
  public model: Model = {} as Model;
  public modelRecord: any;
  public brandName: any;
  public brandRecord: any;
  public vehicleName: any;
  public vehicleRecord: any;
  public page: number = 1;
  public key: string = 'id';
  public reverse: boolean = false;
  constructor(private service: VehicleService, private router: Router) {
    this.service.getAllBrand().subscribe((result) => {
      this.brandName = result;
      this.brandRecord = this.brandName.data;
      console.log(this.brandRecord);
    });
    this.service.getAllVehicleName().subscribe((result) => {
      this.vehicleName = result;
      this.vehicleRecord = this.vehicleName.data;
      console.log(this.vehicleRecord);
    });
  }

  ngOnInit(): void {
    this.service.getAllModel().subscribe((result) => {
      this.record = result;
      this.modelRecord = this.record.data;
    });
  }

  onSearch() {
    if (this.modelData == "") {
      this.ngOnInit();
    } else {
      this.modelRecord = this.modelRecord.filter((res: any) => {
        return res.modelName.toLocaleLowerCase().match(this.modelData.toLocaleLowerCase());
      })
    }
  }

  onSort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  onAdd() {
    this.router.navigate(["vehicle/create"]);
  }
  onView(id: any) {
    this.router.navigateByUrl(`vehicle/${id}/show`);
  }
  onBack(){
    this.router.navigateByUrl(`vehicle`);
  }
}
