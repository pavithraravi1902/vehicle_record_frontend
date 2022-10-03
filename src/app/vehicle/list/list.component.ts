import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
public model_info =[{
model_id: 1, model_name: "BMW", model_year: 2000, model_cost: 100000, description: "brand new"
},{
  model_id: 2, model_name: "Maruti", model_year: 2001, model_cost: 150000, description: "brand new car"
},{
  model_id: 3, model_name: "Suzuki", model_year: 2005, model_cost: 160000, description: "brand new suzuki car"
}]
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

onView(){
this.route.navigate(["vehicle/:id/view"]);
}

onEdit(){
  this.route.navigate(["vehicle/:id/edit"]);
}

onDelete(){
  this.route.navigate(["vehicle/:id/view"]);
}

allRecord(){
  this.route.navigate(["vehicle/show"]);
}

onCreate(){
  this.route.navigate(["vehicle/create"]);
}
}
