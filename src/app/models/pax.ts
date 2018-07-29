export class Pax {
  nombres: string;
  apellidos: string;
  tipoDocumento: string;
  dni: string;
  nacimiento: string;
  categoria: string;
  pais: number;
  sexo: string;
  constructor() {}
  static mapFromImport(obj: any[]) {
    const user = new Pax();
    [
      user.apellidos,
      user.nombres,
      user.tipoDocumento,
      user.dni,
      user.nacimiento,
      user.pais,
      user.sexo,
      ,
      user.categoria
    ] = obj;
    user.categoria = user.categoria.replace(';', '');
    return user;
  }
}
