export class Pago {
  constructor(
    public operacion: string,
    public monto: number,
    public fecha: string,
    public voucher: string,
    public estado?: string,
    public codOperador?: string,
    public codigo?: number,
    public motivo?: string,
    public operador?: string
  ) {
    this.operacion = operacion;
    this.monto = monto;
    this.fecha = fecha;
    this.voucher = voucher;
    this.operador = operador;
  }
}
