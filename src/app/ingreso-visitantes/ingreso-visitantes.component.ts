import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Pax } from "../models/pax";
import { NgForm } from "@angular/forms";

declare var $: any;
@Component({
  selector: "app-ingreso-visitantes",
  templateUrl: "./ingreso-visitantes.component.html",
  styles: []
})
export class IngresoVisitantesComponent implements OnInit {
  constructor() {}

  paxes: Pax[];
  fecha: string;
  ruta: string;
  @ViewChild("fecha") fechaEl: ElementRef;
  @ViewChild("ruta") rutaEl: ElementRef;
  ngOnInit() {
    this.paxes = JSON.parse(localStorage.getItem("paxes"));
    this.fecha = localStorage.getItem("fecha");
    this.ruta = localStorage.getItem("ruta");
  }
  onSubmitPax(f: NgForm) {
    if (f.valid) {
      this.paxes.push(f.value);
      localStorage.setItem("paxes", JSON.stringify( this.paxes ) );
    }
  }
  onRemovePax(pax: Pax) {
    this.paxes = this.paxes.filter(p => p.dni !== pax.dni);
  }
  onFinalizar() {
    localStorage.setItem("fecha", this.fechaEl.nativeElement.value );
    localStorage.setItem("ruta", this.rutaEl.nativeElement.value );
    window.location.href = "confirmar-visitantes";
  }
  onCancel() {
    "fecha,rutas,paxes".split(",").forEach(s => localStorage.removeItem(s));
  }
}

$(document).ready(() => {});
