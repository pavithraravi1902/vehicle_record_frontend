import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
public record: any;
public model_record: any;
  constructor(private service: VehicleService) { 
    this.service.getAllModel().subscribe((result)=>{
      this.record = result
      this.model_record = this.record.data;
      console.log(this.record.data)
    })
  }

  ngOnInit(): void {
  }

}
