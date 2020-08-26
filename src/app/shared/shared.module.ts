import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
