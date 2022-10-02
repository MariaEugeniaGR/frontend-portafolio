export class Experiencia {
    id? : number;
    nombreE : string;
    fechaI: string;
    fechaF: string;
    descripcionE: string;
    imagenExp: string;

    constructor(nombreE: string, fechaI: string, fechaF: string, descripcionE: string, imagenExp: string) {
        this.nombreE = nombreE;
        this.fechaI = fechaI;
        this.fechaF = fechaF;
        this.descripcionE = descripcionE;
        this.imagenExp = imagenExp;
    }
}
