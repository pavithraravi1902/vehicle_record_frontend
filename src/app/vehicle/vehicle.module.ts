import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';




@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ViewComponent,
    VehicleListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule
  ]
})
export class VehicleModule { }
