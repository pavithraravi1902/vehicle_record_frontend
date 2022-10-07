import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './vehicle/form/form.component';
import { HeaderComponent } from './vehicle/header/header.component';
import { ListComponent } from './vehicle/list/list.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { ViewComponent } from './vehicle/view/view.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "vehicle",
    pathMatch: "full"
  },
  {
    path: "vehicle",
    component: ListComponent
  },
  {
    path: "vehicle/:id/view",
    component: ViewComponent
  },
  {
    path: "vehicle/:id/edit",
    component: FormComponent
  },
  {
    path: "vehicle/create",
    component: FormComponent
  },
  {
    path: "vehicle/show",
    component: VehicleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
