import { Component, OnInit } from "@angular/core";
import { Pax } from "../models/pax";
import { Router } from "@angular/router";

declare var $: any;
@Component({
  selector: "app-resumen-visitantes",
  templateUrl: "./resumen-visitantes.component.html",
  styles: []
})
export class ResumenVisitantesComponent implements OnInit {
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
  onCreateGroup(): void {
    "fecha,rutas,paxes,ruta".split(",").forEach(s => localStorage.removeItem(s));
    this.router.navigate(["home"]);
  }
}

$(document).ready(() => {

});
