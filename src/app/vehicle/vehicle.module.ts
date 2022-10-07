import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ViewModelComponent } from './view-model/view-model.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';




@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ViewComponent,
    VehicleListComponent,
    HeaderComponent,
    ViewModelComponent ],
    
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    RouterModule,
  ], 
  exports: [
    HeaderComponent
  ]
})
export class VehicleModule { }
