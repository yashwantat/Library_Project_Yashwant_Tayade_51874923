import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Users} from '../user_model/users';
import { User } from '../model/user';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  url: string="http://localhost:3000/Users";
  getUsers(){
    return this.http.get<Users[]>(this.url);
  }
  // getOne(id){
  //   return this.http.get('http://localhost/rest/viewdetail/1'+id).map(res=>{
  //     return res.json()

  //   })
  // }
  AddBook(obj:any){
    this.http.post('http://localhost:3000/Users',obj
   )
    .subscribe(res => console.log(res));
 }
 DeleteBook(id : string){
  return this.http.delete('http://localhost:3000/Users/' + id)
}
}
