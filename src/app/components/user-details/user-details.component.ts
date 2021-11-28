import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.user = history.state);
  }

  ngOnInit(): void {
  }

}

