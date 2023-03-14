import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductCreateComponent} from "./product-create/product-create.component";


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'create', component: ProductCreateComponent},
  {path: 'update/:id', component: ProductEditComponent},
  // { path:'product/edit/:id',
  //   component:ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
