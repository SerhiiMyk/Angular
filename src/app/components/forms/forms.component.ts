import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IUser} from "../../interfaces/user.interface";
import {UserService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  userForm: FormGroup
  users: IUser[]
  user: IUser

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userId: new FormControl(1)
    })
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  navTo() {
    this.router.navigate(['user',this.userForm.controls['userId'].value])

  }
}
