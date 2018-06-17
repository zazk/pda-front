export class Pax {
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  dni: string;
  nacimiento: string;
  categoria: string;
  pais: number;
  sexo: string;
  verificado: boolean;
  constructor(obj: any[]) {
    [
      this.apellidos,
      this.nombres,
      this.tipoDocumento,
      this.dni,
      this.nacimiento,
      this.pais,
      this.sexo,
      ,
      this.categoria
    ] = obj;
    this.categoria = this.categoria.replace(";", "");
  }
}
