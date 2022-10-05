import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleModule } from './vehicle/vehicle.module';
import { VehicleService } from './vehicle/vehicle.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

//import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    VehicleModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    //Ng2OrderModule,
    //NgxPaginationModule
  ],

  providers: [VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
