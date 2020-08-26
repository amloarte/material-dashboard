import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor( private loginService: LoginService,
               private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    //this.loginService.logOut();
  }

}
