import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS, ID_SISTEMA } from '../../config/config';
import { Funcionalidades } from '../../models/funcionalidades';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  menu: Funcionalidades;
  constructor( private http: HttpClient) { 
    this.cargarStorange();
  }

  guardarStorange(menu_principal: Funcionalidades){
    localStorage.setItem('menu_principal', JSON.stringify(menu_principal)) 
    this.menu = menu_principal;
  }

  cargarStorange() {
    this.menu = JSON.parse(localStorage.getItem('menu_principal'));
  }

  get_funcionalidades_padre( id_perfil: number){

    const data = { id_perfil: id_perfil, id_sistema: ID_SISTEMA, tipo: 450 }
    let url = URL_SERVICIOS + '/api/funcionalidades/get_menu_principal';
    return this.http.post( url, data)
            .pipe(map((resp:any) => {
              this.guardarStorange(resp);
            }));
  }

  get_funcionalidades_hijas(){

    let url = URL_SERVICIOS + '/api/funcionalidades/get_hijas';
    
  }


}
