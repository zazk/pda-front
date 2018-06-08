import { Component, OnInit } from "@angular/core";
import { Pax } from "../models/pax";
import { Router } from "@angular/router";

declare var $: any;
@Component({
  selector: "app-confirmar-visitantes",
  templateUrl: "./confirmar-visitantes.component.html",
  styles: []
})
export class ConfirmarVisitantesComponent implements OnInit {

  paxes: Pax[];
  fecha: string;
  ruta: number;
  rutaActiva: string;
  constructor( private router: Router) {}

  ngOnInit() {
    this.paxes = JSON.parse(localStorage.getItem("paxes"));
    this.fecha = localStorage.getItem("fecha");
    this.ruta = parseInt(localStorage.getItem("ruta"), 10);
    this.rutaActiva = JSON.parse( localStorage.getItem("rutas") )
      .find( obj => obj.srl_cod_ruta === this.ruta ).var_nombre;
  }
  onFinalizar() {
    this.router.navigate(["resumen-visitantes"]);
  }
  onAgregarPax() {
    this.router.navigate(["agregar-visitantes"]);
  }
}

$(document).ready(() => {

});
