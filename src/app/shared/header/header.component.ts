import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/service.index';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(  private _usuarioService: LoginService) { 
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit(): void {}
  
  logOut(){
    this._usuarioService.logOut(this.usuario.id_usuario);
  }

}
