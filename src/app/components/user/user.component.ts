import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {IPost} from "../../interfaces/post.interface";
import {ActivatedRoute} from "@angular/router";
import {PostService, UserService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user:IUser

  constructor() {

  }

  ngOnInit(): void {
  }

}
