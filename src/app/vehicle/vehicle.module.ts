import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';




@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ViewComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehicleModule { }
