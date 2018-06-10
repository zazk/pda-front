export class Pago {
  constructor(
    public operacion: string,
    public monto: number,
    public fecha: string,
    public voucher: string,
    public estado?: string,
  ) {
    this.operacion = operacion;
    this.monto = monto;
    this.fecha = fecha;
    this.voucher = voucher;
  }
}
