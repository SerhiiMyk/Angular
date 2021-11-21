import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/Post";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];
      postService.getPost(id).subscribe(value => this.post = value)
    })
  }

  ngOnInit(): void {
  }

}
