import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Users } from '../user_model/users';
import{Location} from '@angular/common';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  temp: any={};
form: NgForm;
user = Users;
constructor(private rs:RestService,private router: Router, private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){


   

    this.user=form.value;

     this.rs.AddBook(this.user);

    

     alert("Book Successfully Added");

      

   }


   goBack(): void {

    this.location.back();

}
}
