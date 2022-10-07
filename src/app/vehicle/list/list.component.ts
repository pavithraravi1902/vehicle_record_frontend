import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService, Vehicle } from '../vehicle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public registrar_data: any;
  public registrar_info: Array<Vehicle> = [];
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
      this.registrar_data = result;
      this.registrar_info = this.registrar_data.data;
      console.log(this.registrar_info);
    })
  }

  onView(vehicle: Vehicle) {
    this.route.navigateByUrl(`vehicle/${vehicle.record_id}/view`);
  }

  onEdit(val: Vehicle,) {
    this.vehicle = val;
    this.route.navigateByUrl(`vehicle/${val.record_id}/edit`);
  }

  allRecord() {
    this.route.navigate(["vehicle/show"]);
  }

  onCreate() {
    this.route.navigate(["vehicle/create"]);
  }

  search() {
    if (this.customerName == "") {
      return this.ngOnInit();
    } else {
      this.registrar_info = this.registrar_info.filter(res => {
        return res.registrar_name.toLocaleLowerCase().match(this.customerName.toLocaleLowerCase());
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

  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
