import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, username, password } from '../../config/config';
import { Login } from '../../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  guardarStorange( key:string, data: any){
    localStorage.setItem(key, data);
  }

  login ( login: Login ){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    let url = URL_SERVICIOS + '/api/login/autentificar';
    return new Promise((resolve, reject) => {
      this.http.post(url, login, { headers })
      .subscribe( ( resp: any) => {
        if(!resp.T){
          this.guardarStorange('usuario', JSON.stringify(resp.T));
        }else{
          localStorage.clear();
        }
        resolve(resp)
      }, reject)
    })
  }
}
