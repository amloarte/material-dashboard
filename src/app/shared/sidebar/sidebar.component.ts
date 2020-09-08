import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { Funcionalidades } from '../../models/funcionalidades';
import { LoginService } from '../../services/service.index';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {

  usuario: Usuario;
  funcionalidad_padre: Funcionalidades [] = [];

  constructor( 
    private sidebarService: SidebarService,
    private _usuarioService: LoginService,
  ) { 
    this.getFuncionalidadesPadre();
    this.usuario = this._usuarioService.usuario;
  }
  
  getFuncionalidadesPadre(){
    this.sidebarService.get_funcionalidades_padre(this.usuario.id_perfil)
      .subscribe((resp: any) => {
        this.funcionalidad_padre = resp
      });
  }
  
  ngOnInit(): void {}

}
