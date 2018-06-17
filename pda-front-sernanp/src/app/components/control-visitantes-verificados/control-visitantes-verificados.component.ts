import { Component, OnInit } from "@angular/core";
import { UserService } from "../../shared/services/user/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-control-visitantes-verificados",
  templateUrl: "./control-visitantes-verificados.component.html",
  styles: []
})
export class ControlVisitantesVerificadosComponent implements OnInit {
  paxes: Pax[];
  fecha: string;
  ruta: number;
  rutaActiva: string;
  seq: number;
  year: string;
  grupos: any[];
  grupoActivo: any;
  load: boolean = false;
  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.grupoActivo = JSON.parse(localStorage.getItem("grupoActivo")) || {};
    this.paxes = this.grupoActivo.visitantes;
    this.fecha = this.grupoActivo.fecha;
    this.rutaActiva = JSON.parse(localStorage.getItem("rutas")).find(
      obj => obj.srl_cod_ruta === parseInt(this.grupoActivo.ruta, 10)
    ).var_nombre;
    this.load = true;
  }
  onVerificar() {
    console.log("Grupo Verificado", this.grupoActivo, JSON.stringify( this.grupoActivo) );
  }
}
