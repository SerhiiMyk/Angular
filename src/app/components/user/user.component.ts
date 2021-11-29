import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTransferService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser
  btnToggle: boolean = true;
  userId: number

  constructor(private transferService: DataTransferService, private router: Router, private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.transferService.getUserId().subscribe(value => this.userId = value)
  }


  handle() {
    this.router.navigate([this.user.id], {relativeTo: this.activateRoute, state: this.user})
    this.transferService.setUserId(this.user.id)
  }
}

