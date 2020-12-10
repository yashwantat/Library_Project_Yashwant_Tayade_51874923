import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  add: string ="assets/img/img1.jpg";
  model: User = {

    email: '',

    password: ''



  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmitAdmin() {
    if (this.model.email == "librarian@gmail.com" && this.model.password == "librarian@123") { this.router.navigate(['/home']) }

    else {
      alert("Invalid Librarian Credentials !");

    }
  }
  onSubmitMem() {
    if ((this.model.email == "member1@gmail.com" && this.model.password == "member@123")
    ||(this.model.email == "member2@gmail.com" && this.model.password == "member@123")
    ||(this.model.email == "member3@gmail.com" && this.model.password == "member@123")
    ||(this.model.email == "member4@gmail.com" && this.model.password == "member@123")
    ||(this.model.email == "member5@gmail.com" && this.model.password == "member@123")) { this.router.navigate(['/home']) }

    else {
      alert("Invalid Member Credentials !");

    }

  }
}
