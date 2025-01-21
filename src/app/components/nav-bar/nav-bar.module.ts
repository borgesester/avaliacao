import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NavBarComponent
   ]
})
export class NavBarModule { }
