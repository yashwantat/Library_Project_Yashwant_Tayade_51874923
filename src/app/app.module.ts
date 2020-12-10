import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipe/search.pipe';
import { SortBookPipe } from './pipe/sort-book.pipe'; 
import{NgxPaginationModule} from 'ngx-pagination';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
//import{Observable} from 'rxjs';
import "@angular/compiler";
import { AddbookComponent } from './addbook/addbook.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteBookComponent } from './delete-book/delete-book.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   routingComponents,
   HomeComponent,
   BooksComponent,
   SearchPipe,
   SortBookPipe,
   ContactUsComponent,
   ViewdetailComponent,
   AddbookComponent,
   AdminComponent,
   DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    // Observable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
