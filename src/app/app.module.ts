import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/user/user.component';
import {UsersComponent} from './components/users/users.component';
import {RouterModule} from "@angular/router";
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from "./components/post/post.component";
import {PostDetailsComponent} from "./components/post-details/post-details.component";
import {PostResolveService} from "./services/post-resolve.service";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
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
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
