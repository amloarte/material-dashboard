import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_SERVICIOS, ID_SISTEMA } from '../../config/config';
import { Login } from '../../models/login';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  usuario: Usuario;

  constructor( 
    private http: HttpClient,
    private route: Router)
  {
    this.cargarStorange();
  }

  guardarStorange( usuario: Usuario){
    localStorage.clear();
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
  }

  cargarStorange(){
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  login ( login: Login ){
    let url = URL_SERVICIOS + '/api/login/autentificar';
    return new Promise((resolve, reject) => {
      this.http.post(url, login)
      .subscribe( ( resp: any) => {
        if(resp.T != null){
          this.guardarStorange(resp.T);
          resolve(resp);
        }else{
          resolve(resp);
          localStorage.clear();
        }
      }, reject)
    })
  }

  logOut(id_usuario: number){
    let url = URL_SERVICIOS + '/api/login/cerrar_session';
    const data = { id_usuario: id_usuario, id_sistema: ID_SISTEMA};
    this.http.post(url, data)
      .subscribe(resp => {
        console.log(resp);
        localStorage.clear();
        this.route.navigate(['/login']);
      });
  }

  validarHorario () {

    let url = URL_SERVICIOS + '/api/login/verificar_horario';

    let params = new HttpParams();
        params = params.set('id_usuario', this.usuario.id_usuario.toString());
        params = params.set('id_sistema', ID_SISTEMA.toString());
        params = params.set('id_perfil', this.usuario.id_perfil.toString());

    return this.http.get(url, { params }).subscribe(resp => {
      console.log(resp);
    })
    
  }
}
