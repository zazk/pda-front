import { Pax } from "./pax";

export class Grupo {
  constructor(
    public paxes: Pax[],
    public codigo?: string,
    public fecha?: string,
    public ruta?: number,
    public costo?: number,
    public totalVisitantes?: number,
    public codOperador?: number,
    public inasistencias?: number,
    public documento?: string,
    public estado?: number
  ) {
    this.paxes = paxes;
    this.codigo = codigo;
    this.fecha = fecha;
    this.ruta = ruta;
    this.costo = costo ? costo : 20;
    this.totalVisitantes = totalVisitantes;
    this.codOperador = codOperador;
    this.inasistencias = inasistencias;
    this.documento = documento;
    this.estado = estado;
  }
}
