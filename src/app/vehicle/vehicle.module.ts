import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';




@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehicleModule { }
