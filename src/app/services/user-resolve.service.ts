import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "./user.service";
import {IUser} from "../interfaces/user.interface";


@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser>{


  constructor(private userService:UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    return this.userService.getUser(+route.params['id'])
  }



}
