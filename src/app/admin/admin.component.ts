import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  add: string ="assets/img/img3.png";
  add1: string ="assets/img/img4.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
