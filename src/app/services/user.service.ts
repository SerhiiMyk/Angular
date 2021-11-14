import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private HttpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.HttpClient.get<IUser[]>(this.url)
  }

  getUser(id: number): Observable<IUser> {
    return this.HttpClient.get<IUser>(this.url + '/' + id)
  }
}
