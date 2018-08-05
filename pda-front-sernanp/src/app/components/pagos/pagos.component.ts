import { Component, OnInit } from '@angular/core';
import { Pago } from '../../models/pago';
import { UserService } from '../../shared/services/user/user.service';

declare var $: any;
declare var ace: any;
declare var bootbox: any;
@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styles: []
})
export class PagosComponent implements OnInit {
  pagos: Pago[] = [];
  url: string;
  indexPage: number = 0;
  itemsPage: number = 10;
  estados: any[] = [
    { text: 'Pendiente', class: 'warning' },
    { text: 'Aceptado', class: 'success' },
    { text: 'Rechazado', class: 'danger' }
  ];
  constructor(private service: UserService) {}

  ngOnInit() {
    this.url = this.service.url;
    this.loadScripts();
  }
  onSearch(form: any) {
    const pagos = JSON.parse(localStorage.getItem('pagos')) || [];
    this.pagos = pagos.filter((p: Pago) => {
      if (form.operador) {
        const termOperador = form.operador.toLowerCase();
        return p.operador.toLowerCase().indexOf(termOperador) >= 0;
      }
      if (form.operacion) {
        return p.operacion.indexOf(form.operacion) >= 0;
      }
      return true;
    });
  }
  onAceptarPago(pago: any): void {
    this.service.updatePagoaprobado(pago.codigo).subscribe(r => {
      console.log(r);
      this.pagos.map(p => {
        if (p.codigo === pago.codigo) {
          p.estado = '2';
        }
        return p;
      });
      localStorage.setItem('pagos', JSON.stringify(this.pagos));
    });
  }
  onRechazarPago(pago: any): void {
    console.log('PAGO RECHAZO', pago);
    bootbox.prompt('Motivo de rechazo', motivo => {
      console.log('RETURN RECHAZO', motivo);
      if (motivo) {
        this.service.updatePagorechazo(pago.codigo, motivo).subscribe(r => {
          console.log(r);
          this.pagos.map(p => {
            if (p.codigo === pago.codigo) {
              p.estado = '3';
              p.motivo = motivo;
            }
            return p;
          });
          localStorage.setItem('pagos', JSON.stringify(this.pagos));
        });
      } else {
      }
    });
  }
  onClearSearch(form) {
    form.reset();
    this.onSearch(form);
  }
  loadScripts() {
    this.service.listPagos().subscribe(response => {
      console.log('PAGOS', response);
      if (response.length) {
        this.pagos = response.map(
          r =>
            new Pago(
              r.var_operacion,
              r.num_monto,
              r.dte_fec_abono,
              r.var_comprobante,
              r.int_estado,
              r.var_cod_operador,
              r.srl_cod_pago,
              r.txt_motivorechazo,
              r.var_razonsocial
            )
        );
        localStorage.setItem('pagos', JSON.stringify(this.pagos));
      }
    });
  }
}
