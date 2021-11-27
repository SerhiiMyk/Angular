import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from "../interfaces/user.interface";

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: IUser, ...args: unknown[]): string {
    let userStr=`<${value.id}>).<${value.name}>-<${value.email}>`
    return userStr;
  }

}
