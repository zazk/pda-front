import { Pax } from "./pax";

export class Grupo {
  constructor(
    public paxes: Pax[],
    public codigo?: string,
    public fecha?: string,
    public ruta?: number,
    public costo?: number
  ) {
    this.paxes = paxes;
    this.codigo = codigo;
    this.fecha = fecha;
    this.ruta = ruta;
    this.costo = costo ? costo : 20;
  }
}
