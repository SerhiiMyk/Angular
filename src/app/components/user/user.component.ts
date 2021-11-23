import {Component, OnInit} from '@angular/core';
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

  user: IUser
  uPosts: IPost[] = []
  uPost:IPost

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];
      userService.getUser(id).subscribe(value => this.user = value);
      postService.getUserPosts(id).subscribe(value => this.uPosts = value)
    })
  }

  ngOnInit(): void {
  }

}
