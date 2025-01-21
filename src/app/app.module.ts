import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { UsersListModule } from './pages/users-list/users-list.module';
import { AddEditUserModule } from './pages/add-user/add-edit-user.module';
import { UserModule } from './pages/user/user.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    UsersListModule,
    AddEditUserModule,
    UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
