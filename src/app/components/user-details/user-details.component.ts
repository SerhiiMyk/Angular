import {Component, OnInit} from '@angular/core';
import {Post} from "../../models/Post";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  post: Post

  constructor() {}


  ngOnInit(): void {
  }

}
