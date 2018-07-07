import { Component, OnInit } from "@angular/core";
import { Pax } from "../models/pax";
import { Router } from "@angular/router";
import { Grupo } from "../models/grupo";

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
  grupoInsertado: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.paxes = JSON.parse(localStorage.getItem("paxes"));
    this.grupoInsertado = JSON.parse(
      localStorage.getItem("grupoInsertado")
    ).grupo;
    console.log("GRUPO INSERTADO", this.grupoInsertado);
    this.fecha = localStorage.getItem("fecha");
    this.ruta = parseInt(localStorage.getItem("ruta"), 10);
    this.rutaActiva = JSON.parse(localStorage.getItem("rutas")).find(
      obj => obj.id === this.ruta
    ).nombre;
  }
  onCreateGroup(): void {
    "grupoInsertado,fecha,paxes,ruta"
      .split(",")
      .forEach(s => localStorage.removeItem(s));
    this.router.navigate(["home"]);
  }
}

$(document).ready(() => {});
