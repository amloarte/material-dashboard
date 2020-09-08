import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, BASICAUTH, ID_SISTEMA } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor( private http: HttpClient) { }

  get_funcionalidades_padre( id_perfil: number){

    const data = { id_perfil: id_perfil, id_sistema: ID_SISTEMA, tipo: 450 }
    let url = URL_SERVICIOS + '/api/funcionalidades/get_menu_principal';
    return this.http.post( url, data);

  }

  get_funcionalidades_hijas(){

    let url = URL_SERVICIOS + '/api/funcionalidades/get_hijas';
    
  }


}
