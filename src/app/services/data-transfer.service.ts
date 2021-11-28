import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private idData = new BehaviorSubject<number>(0)

  constructor() {
  }

  getUserId(): BehaviorSubject<number> {
    return this.idData

  }

  setUserId(value: number): void {
    this.idData.next(value)
  }

  getUserIdSnapShot(): number {
    return this.idData.getValue()
  }
}
