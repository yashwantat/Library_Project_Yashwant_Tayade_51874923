import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { Users } from '../user_model/users';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  temp: any = {};
  form: NgForm;
  user = Users;
  constructor(private rs: RestService, private router: Router) { }

  ngOnInit(): void {
  }
  DeleteBook(id : string){
    this.rs.DeleteBook(id)
    .subscribe( (rs) => 
    {
      console.log(rs);
      this.rs.getUsers();
    }, (error) => {
      console.log(error);
    })

    alert("Book Successfully Deleted");
     this.router.navigate(['/rest'])
      

  }
}

