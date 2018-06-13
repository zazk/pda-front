export class Pax {
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  dni: string;
  nacimiento: string;
  categoria: string;
  genero: string;
  constructor(obj: string[]) {
    [
      this.nombres,
      this.apellidos,
      this.tipoDocumento,
      this.dni,
      this.nacimiento,
      this.genero,
      ,
      this.categoria
    ] = obj;
    this.categoria = this.categoria.replace(";", "");
  }
}
