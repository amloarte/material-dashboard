import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';
import { Usuario } from '../../models/usuario';
import { Respuesta } from '../../models/Respuesta';
import { ID_SISTEMA, TERMINAL } from '../../config/config';
import { Login } from '../../models/login';
import { LoginService } from '../../services/service.index';

const md5 = new Md5();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  usuario: Usuario;
  respuesta: Respuesta;
  password: string;
  
  loginUser: Login = {
    login: '',
    password: md5.appendStr('c').end().toString(),
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
        this.respuesta = resp
        this.validarLogin(this.respuesta.codigo)
      }).catch( err => {
          alert("Actualmente no puede ingresar al sistema. Intente mas tarde")
          console.log(err);
      });

  }

  validarLogin(codigo: string){
    switch (this.respuesta.codigo) {
      case 'L1': {
        //statements; 
        break;
      }
      case 'L2': {
        alert(this.respuesta.mensajes)
        alert("Contraseña Caducada")
        //statements; 
        break;
      }
      case 'L3': {
        const mensajeLogin = this.respuesta.mensajes[0]
        const splitLogLogin = mensajeLogin.split('|');
        const logLogin = splitLogLogin[0] + '\n\n' + splitLogLogin[1] + '\n' + splitLogLogin[2] + '\n' + splitLogLogin[3];
        alert(logLogin)
        this.router.navigate(['/index'])
        break;
      }
      case 'L4': {
        const mensajeLogin = this.respuesta.mensajes[0]
        const splitLogLogin = mensajeLogin.split('|');
        const logLogin = splitLogLogin[0] + '\n\n' + splitLogLogin[1] + '\n' + splitLogLogin[2] + '\n' + splitLogLogin[3];
        alert(logLogin)
        this.router.navigate(['/perfiles'])
        break;
      }
      case 'L5': {
        alert(this.respuesta.mensajes)
        //statements; 
        break;
      }
      case 'L6': {
        alert(this.respuesta.mensajes)
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