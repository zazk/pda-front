import { Pax } from "./pax";

export class Grupo {
  constructor(
    public visitantes: Pax[],
    public codigo?: string,
    public fecha?: string,
    public ruta?: number,
    public costo?: number,
    public codOperador?: string,
    public totalVisitantes?: number,
    public id?: number,
    public inasistencias?: number,
    public estado?: number,
    public fechaCreacion?: string
  ) {
    this.visitantes = visitantes;
    this.codigo = codigo;
    this.fecha = fecha;
    this.ruta = ruta;
    this.costo = costo ? costo : 20;
    this.codOperador = codOperador;
    this.totalVisitantes = totalVisitantes;
    this.id = id;
    this.inasistencias = inasistencias;
    this.estado = estado;
    this.fechaCreacion = fechaCreacion;
  }
}
