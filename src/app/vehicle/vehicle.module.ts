import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';




@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    ViewComponent,
    VehicleListComponent,
    HeaderComponent,
    LeftMenuComponent ],
    
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    RouterModule,
  ], 
  exports: [
    HeaderComponent,
    LeftMenuComponent
  ]
})
export class VehicleModule { }
