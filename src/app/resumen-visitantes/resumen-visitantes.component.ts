import { Component, OnInit } from "@angular/core";
import { Pax } from "../models/pax";

declare var $: any;
@Component({
  selector: "app-resumen-visitantes",
  templateUrl: "./resumen-visitantes.component.html",
  styles: []
})
export class ResumenVisitantesComponent implements OnInit {
  paxes: Pax[];
  fecha: string;
  ruta: string;
  constructor() {}

  ngOnInit() {
    this.paxes = JSON.parse(localStorage.getItem("paxes"));
    this.fecha = localStorage.getItem("fecha");
    this.ruta = localStorage.getItem("ruta");
  }
}

$(document).ready(() => {

});
