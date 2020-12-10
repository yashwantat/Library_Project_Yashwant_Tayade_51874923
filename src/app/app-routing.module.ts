import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RestComponent } from './rest/rest.component';
import { ContactUsComponent } from './contact-us/contact-us.component'
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { AdminComponent } from './admin/admin.component';
import { AddbookComponent } from './addbook/addbook.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

const routes: Routes = [{ path: '', component: LoginFormComponent },
{ path: 'home', component: HomeComponent },
{ path: 'rest', component: RestComponent },
{ path: 'contactUs', component: ContactUsComponent },
{ path: 'viewdetail', component: ViewdetailComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'addBook', component: AddbookComponent },
{ path: 'deleteBook', component: DeleteBookComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginFormComponent, HomeComponent, RestComponent, ContactUsComponent, ViewdetailComponent, AdminComponent,
  AddbookComponent, DeleteBookComponent]