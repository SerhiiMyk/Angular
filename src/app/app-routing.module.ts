import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";

const routs: Route[] = [
  {
    path: '', component: HomeComponent, children: [
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(value => value.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(value => value.PostModule)}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routs)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
