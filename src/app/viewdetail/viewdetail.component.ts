import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';
import {Users} from '../user_model/users'

@Component({
  selector: 'app-viewdetail',
  templateUrl: './viewdetail.component.html',
  styleUrls: ['./viewdetail.component.scss']
})
export class ViewdetailComponent implements OnInit {
  users : Users[];
// id:any;
constructor(public rs: RestService) { }
  // constructor(private route: ActivatedRoute,
  //   private RestService: RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users = response;
      
    })
  }
    // console.log(this.route.snapshot.params['id']);
    // this.getOne();
  }
  // getOne() {
  //   this.RestService.getOne(this.id).subscribe(data=>{
  //     console.log(data);
  //   })
  //  }
  
