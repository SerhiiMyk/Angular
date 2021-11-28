import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {IPost} from "../../interfaces/post.interface";
import {ActivatedRoute} from "@angular/router";
import {DataTransferService, PostService, UserService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser
  btnToggle: boolean = true;
  userId :number

  constructor(private transferService: DataTransferService) {

  }

  ngOnInit(): void {
    this.transferService.getUserId().subscribe(value => this.userId=value)

  }


  lift() {
    this.transferService.setUserId(this.user.id)
    this.btnToggle = this.userId !== this.user.id;

  }

}

