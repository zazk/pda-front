export class Pax {
  nombre: string;
  apellido: string;
  tipoDocumento: string;
  dni: string;
  nacimiento: string;
  constructor(obj: string[]) {
    [ this.nombre, this.apellido, this.tipoDocumento, this.dni, this.nacimiento] = obj;
  }
}
