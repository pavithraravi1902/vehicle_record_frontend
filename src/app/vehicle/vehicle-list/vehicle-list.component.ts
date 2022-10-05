import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  public record: any;
  public modelName: any;
  public model_record: any;
  public page: number = 1;
  public key: string = 'id';
  public reverse: boolean = false;
  constructor(private service: VehicleService) {

  }

  ngOnInit(): void {
    this.service.getAllModel().subscribe((result) => {
      this.record = result;
      this.model_record = this.record.data;
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
}
