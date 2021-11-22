import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../interfaces/post.interface";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost

  constructor(private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navTo() {
    this.router.navigate([this.post.id], {relativeTo: this.activateRoute, state: this.post})
  }

}
