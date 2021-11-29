import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {Route, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserPipe} from './pipes';

import {UserModule} from "./modules/user/user.module";
import {HomeComponent} from './components/home/home.component';
import {UsersComponent} from "./modules/user/components/users/users.component";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    UserPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
