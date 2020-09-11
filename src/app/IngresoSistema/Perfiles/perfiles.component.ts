import { Component, OnInit } from '@angular/core';
import { PerfilesService, LoginService, SidebarService } from '../../services/service.index';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styles: [
  ]
})
export class PerfilesComponent implements OnInit {

  usuario: Usuario;
  perfiles = [];

  constructor(
    private _perfiles:PerfilesService,
    private _usuario: LoginService,
    private _menu: SidebarService
  ) {
    this.usuario = _usuario.usuario;
    this.perfilesUsuario();
   }

  ngOnInit(): void {
    this.perfilesUsuario();
  }

  perfilesUsuario (){
    this._perfiles.obtenerPerfiles()
      .subscribe( (resp: any ) => {
        this.perfiles = resp
      })
  }

  irPaginaPrincipal(){
    this._menu.get_funcionalidades_padre( this.perfiles['id_perfil'] )
  }
}
