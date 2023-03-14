import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";


const routes: Routes = [
  {path: "", component: FacilityListComponent},
  {path:"create",component:FacilityCreateComponent},
  {path:"edit/:id",component:CustomerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
