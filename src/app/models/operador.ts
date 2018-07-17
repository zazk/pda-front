export class Operador {
  codOperador: string;
  razonSocial: string;
  ruc: string;
  direccion: string;
  telefono: string;
  email: string;
  web: string;
  estado: number;
  saldo: string;
  password: string;
  constructor() {}
  mapFromObject(obj: any) {
    const op = new Operador();
    op.codOperador = obj.Operador;
    op.razonSocial = obj.RazonSocial;
    op.ruc = obj.Ruc;
    op.direccion = obj.Direccion;
    op.email = obj.Email;
    op.web = obj.Web;
    op.estado = obj.Estado;
    op.saldo = obj.Saldo;
    op.password = obj.Password;
    return op;
  }
}
