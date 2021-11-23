import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  uPost:IPost
  constructor() { }

  ngOnInit(): void {
  }

}

