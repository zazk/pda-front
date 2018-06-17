import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pago } from "../models/pago";
import { UserService } from "../shared/services/user/user.service";

@Component({
  selector: "app-pagos",
  templateUrl: "./pagos.component.html",
  styles: []
})
export class PagosComponent implements OnInit {
  pagos: Pago[];
  url: string;
  user: any;
  estados: any[] = [
    { text: "Pendiente", class: "warning" },
    { text: "Aceptado", class: "success" },
    { text: "Rechazado", class: "danger" }
  ];
  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {
    this.url = this.service.url;
    this.pagos = JSON.parse(localStorage.getItem("pagos")) || [];
    this.user = JSON.parse(localStorage.getItem("currentUser")) || {};
    this.loadScripts();
  }
  onSearch(form: any) {
    const pagos = JSON.parse(localStorage.getItem("pagos")) || [];
    this.pagos = pagos.filter((p: Pago) => {
      if (form.estado) {
        return p.estado == form.estado;
      }
      if (form.operacion) {
        return p.operacion.indexOf(form.operacion) >= 0;
      }
      return true;
    });
  }
  loadScripts() {
    this.service
      .consultaPagooperador(this.user.var_cod_operador)
      .subscribe(response => {
        console.log("PAGOS", response);
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
          localStorage.setItem("pagos", JSON.stringify(this.pagos));
        }
      });
  }
}
