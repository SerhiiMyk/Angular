import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";

import {PostComponent, PostDetailsComponent, PostsComponent, UserComponent, UsersComponent} from "./components";
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './forms/forms.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostResolveService} from "./services";

const routs:Route[]=[
  {path:'',component:HomeComponent,children:[
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
        children: [
          {path: ':id', component: PostDetailsComponent, resolve: {data: PostResolveService}},
        ]
      },
    ]},
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    HomeComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routs),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
