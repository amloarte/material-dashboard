import { HttpHeaders } from '@angular/common/http';

//URL SERVICIOS
export const URL_SERVICIOS = 'http://localhost:6350';

//SISTEMA
export const ID_SISTEMA = 82;

// TERMINAL 
export const TERMINAL = '192.168.41.11';

//Hedades
const username = 'userCoopmego';
const password = 'C00pMeg0*2018';


export const BASICAUTH = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });