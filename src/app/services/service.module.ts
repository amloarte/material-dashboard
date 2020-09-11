import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginService,
         SidebarService,
         LoginGuard,
         PerfilesService
        } from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    LoginService,
    SidebarService,
    LoginGuard,
    PerfilesService
  ],
  declarations: [],
})
export class ServiceModule { }
