import { Usuario } from './usuario.model'

export class RespuestaLogin {
    
    constructor(
        public T: Usuario, 
        public codigo: string, 
        public mensajes: object) {
    }
    
}


