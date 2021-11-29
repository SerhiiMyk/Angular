import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {userError} from "@angular/compiler-cli/src/transformers/util";
import {UsersComponent} from "./components/users/users.component";

const routes: Routes = [
  {path: '', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
