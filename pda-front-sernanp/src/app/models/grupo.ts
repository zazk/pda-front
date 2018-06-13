import { Pax } from "./pax";

export class Grupo {
  constructor(
    public paxes: Pax[],
    public numero?: string,
    public fecha?: string,
    public ruta?: number,
    public monto?: number
  ) {
    this.paxes = paxes;
    this.numero = numero;
    this.fecha = fecha;
    this.ruta = ruta;
    this.monto = monto ? monto : 20;
  }
}
