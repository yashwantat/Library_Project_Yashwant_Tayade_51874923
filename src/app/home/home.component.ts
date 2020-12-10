import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
home: string = "assets/img/img1.jpg"
head1: string ="assets/img/head1.jpg"
book1: string="assets/img/book1.jpg"
book2: string="assets/img/book2.jpg"
book3: string="assets/img/book3.jpg"
book4: string="assets/img/book4.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
