import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService, Vehicle } from '../vehicle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public registrarData: any;
  public registrarInfo: Array<Vehicle> = [];
  public customerName: any
  public key: any = 'id';
  public reverse: boolean = false;
  public page: number = 1
  public routeParameter = -1;
  public vehicle: Vehicle = {} as Vehicle
  constructor(private route: Router, private router: ActivatedRoute, private service: VehicleService) {
    this.routeParameter = Number(this.router.snapshot.paramMap.get("id"));
  }

  ngOnInit(): void {
    this.service.getRegistrarRecord().subscribe((result) => {
      this.registrarData = result;
      this.registrarInfo = this.registrarData.data;
      console.log(this.registrarInfo);
    })
  }

  onView(vehicle: Vehicle) {
    this.route.navigateByUrl(`vehicle/${vehicle.recordId}/view`);
  }

  onEdit(val: Vehicle,) {
    this.vehicle = val;
    this.route.navigateByUrl(`vehicle/${val.recordId}/edit`);
  }

  allRecord() {
    this.route.navigate(["vehicle/show"]);
  }

  onCreate() {
    this.route.navigate(["vehicle/create"]);
  }

  onSearch() {
    if (this.customerName == "") {
      return this.ngOnInit();
    } else {
      this.registrarInfo = this.registrarInfo.filter(res => {
        return res.registrarName.toLocaleLowerCase().match(this.customerName.toLocaleLowerCase());
      })
    }
  }

  onDelete(): void {
    confirm("Are you sure to delete this data?");
    this.service.deleteRecord(this.routeParameter).subscribe((res) => {
      console.log(res);
      alert("Deleted successfully!");
      this.route.navigate(["vehicle"]);
    }, (error) => {
      console.log("Error: ", error);
    });
  }

  onSort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
