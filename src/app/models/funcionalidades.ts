export class Funcionalidades {

    constructor(
        id: number,
        id_sistema: number,
        padre: Funcionalidades,
        id_padre: number,
        nombre: string,
        tipo: number,
        url: string,
        descripcion: string,
        vigencia: boolean) {

        this.id = id;
        this.id_sistema = id_sistema;
        this.padre = padre;
        this.id_padre = id_padre;
        this.nombre = nombre;
        this.tipo = tipo;
        this.url = url;
        this.descripcion = descripcion;
        this.vigencia = vigencia;
    }

    id: number;
    id_sistema?: number;
    padre?: Funcionalidades;
    id_padre: number;
    nombre: string;
    tipo: number;
    url: string;
    descripcion?: string;
    vigencia?: boolean;
} 