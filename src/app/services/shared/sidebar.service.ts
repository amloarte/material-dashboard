import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, username, password } from '../../config/config';
import { Menu } from '../../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor( private http: HttpClient) { }

  getFuncionalidades( menu: Menu){

    let url = URL_SERVICIOS +'/api/funcionalidades/get';
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
    return this.http.post(url, menu, { headers })
  }


}
