// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from "./bai_tap_1/component/dictionary-page/dictionary-page.component";
import {DictionaryDetailComponent} from "./bai_tap_1/component/dictionary-detail/dictionary-detail.component";


const routes: Routes = [
  {path: "list",component:DictionaryPageComponent},
  {path: "list/:vietnam",component:DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
