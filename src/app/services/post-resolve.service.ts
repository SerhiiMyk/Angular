import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {PostService} from "./post.service";
import {IPost} from "../interfaces/post.interface";



@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost>{


  constructor(private postService:PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    return this.postService.getPost(+route.params['id'])
  }



}

