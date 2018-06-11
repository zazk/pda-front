export class User {
  constructor(
    public usuario: string,
    public saldo: number,
    public razonsocial: string,
    public var_cod_operador: string
  ) {
    this.usuario = usuario;
    this.saldo = saldo;
    this.razonsocial = razonsocial;
    this.var_cod_operador = var_cod_operador;
  }
}
