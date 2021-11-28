import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user:IUser
  constructor() { }

  ngOnInit(): void {
  }

}

