import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { Login } from '../models/login';
import { RespuestaLogin } from '../models/RespuestaLogin.model';
import { ID_SISTEMA, TERMINAL, password } from '../config/config';
import { Usuario } from '../models/usuario.model';

const md5 = new Md5();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  
  usuario: Usuario;
  respuestaLogin: RespuestaLogin;
  password: string;
  
  loginUser: Login = {
    login: '',
    password: md5.appendStr(password).end().toString(),
    id_sistema: ID_SISTEMA,
    terminal: TERMINAL
  };
  
  constructor(private loginService: LoginService,
              private router: Router){ }

  ngOnInit(): void {}

  async login(fLogin: NgForm){
    if (fLogin.invalid){ return; }
    this.loginService.login(this.loginUser)
      .then( (resp: any) =>{
        this.respuestaLogin = resp
        this.validarLogin(this.respuestaLogin.codigo)
      }).catch( err => {
          alert("Actualmente no puede ingresar al sistema. Intente mas tarde")
          console.log(err);
      });
  }

  validarLogin(codigo: string){
    switch (this.respuestaLogin.codigo) {
      case 'L1': {
        //statements; 
        break;
      }
      case 'L2': {
        alert(this.respuestaLogin.mensajes)
        alert("Contraseña Caducada")
        //statements; 
        break;
      }
      case 'L3': {
        const mensajeLogin = this.respuestaLogin.mensajes[0]
        const splitLogLogin = mensajeLogin.split('|');
        const logLogin = splitLogLogin[0] + '\n\n' + splitLogLogin[1] + '\n' + splitLogLogin[2] + '\n' + splitLogLogin[3];
        alert(logLogin)
        this.router.navigate(['/index'])
        break;
      }
      case 'L4': {
        const mensajeLogin = this.respuestaLogin.mensajes[0]
        const splitLogLogin = mensajeLogin.split('|');
        const logLogin = splitLogLogin[0] + '\n\n' + splitLogLogin[1] + '\n' + splitLogLogin[2] + '\n' + splitLogLogin[3];
        alert(logLogin)
        this.router.navigate(['/index'])
        break;
      }
      case 'L5': {
        alert(this.respuestaLogin.mensajes)
        //statements; 
        break;
      }
      case 'L6': {
        alert(this.respuestaLogin.mensajes)
        //statements; 
        break;
      }
      default: {
        //statements; 
        break;
      }
    }
  }
}