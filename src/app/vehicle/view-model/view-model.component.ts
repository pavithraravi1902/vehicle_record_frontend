import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService, Vehicle, Model  } from '../vehicle.service';

@Component({
  selector: 'app-view-model',
  templateUrl: './view-model.component.html',
  styleUrls: ['./view-model.component.scss']
})
export class ViewModelComponent implements OnInit {

  public routeParameter = -1;
  public info: any
  public model: Model | any = {} as Vehicle | any;

  constructor(private service: VehicleService, private router: Router, private route: ActivatedRoute) {
    this.routeParameter = Number(this.route.snapshot.paramMap.get("id"));
    this.service.getModelById(this.routeParameter).subscribe((result) => {
      this.info = result;
      this.model = this.info.data;
      console.log(this.info);
    })
  }


  ngOnInit(): void {
  }
  onBack() {
    this.router.navigateByUrl("/vehicle/show");
  }
}

