import { Pax } from "./pax";

export class Grupo {
  constructor(
    public visitantes: Pax[],
    public codigo?: string,
    public fecha?: string,
    public ruta?: number,
    public costo?: number
  ) {
    this.visitantes = visitantes;
    this.codigo = codigo;
    this.fecha = fecha;
    this.ruta = ruta;
    this.costo = costo ? costo : 20;
  }
}
