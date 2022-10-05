import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService, Vehicle } from '../vehicle.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public routeParameter = -1;
  public info: any
  public vehicle: Vehicle | any = {} as Vehicle | any;
  constructor(private service: VehicleService, private router: Router, private route: ActivatedRoute) {
    this.routeParameter = Number(this.route.snapshot.paramMap.get("id"));
    this.service.getRegistrarRecordById(this.routeParameter).subscribe((result) => {
      this.info = result;
      this.vehicle = this.info.data;
      console.log(this.vehicle);
    })
  }

  ngOnInit(): void {
  }
  onBack(id: number) {
    this.router.navigateByUrl("/vehicle");
  }
  onDelete(): void {
    confirm("Are you sure to delete this data?");
    this.service.deleteRecord(this.routeParameter).subscribe(() => {
      alert("Deleted successfully!");
      this.router.navigate(["vehicle"]);
    }, (error) => {
      console.log("Error: ", error);
    });
  }
}
