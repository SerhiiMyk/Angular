import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {FormsComponent, HomeComponent, UserComponent, UserDetailsComponent, UsersComponent} from "./components";
import { UserPipe } from './pipes';

const routs: Route[] = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'user',
        component: UsersComponent,
        children: [
          {path: ':id', component: UserComponent}
        ]
      }
    ]
  },
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    HomeComponent,
    FormsComponent,
    UserDetailsComponent,
    UserPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routs),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
