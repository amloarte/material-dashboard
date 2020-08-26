import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
