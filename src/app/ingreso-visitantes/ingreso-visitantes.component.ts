import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Pax } from "../models/pax";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

declare var $: any;
@Component({
  selector: "app-ingreso-visitantes",
  templateUrl: "./ingreso-visitantes.component.html",
  styles: []
})
export class IngresoVisitantesComponent implements OnInit {

  paxes: Pax[];
  fecha: string;
  ruta: string;
  routes: any[];
  fechaPax: string;
  @ViewChild("fechaEl") fechaEl: ElementRef;
  @ViewChild("rutaEl") rutaEl: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    this.paxes = JSON.parse(localStorage.getItem("paxes")) || [];
    this.routes = JSON.parse(localStorage.getItem("rutas")) || [];
    this.fecha = localStorage.getItem("fecha");
    this.ruta = localStorage.getItem("ruta");
    console.log("RUTA", this.ruta);
    this.loadScript();
  }
  onSubmitPax(f: NgForm) {
    console.log(f);
    f.value.nacimiento = this.fechaPax;
    if (f.valid && this.fechaPax) {
      this.paxes.push(f.value);
      localStorage.setItem("paxes", JSON.stringify(this.paxes));
      f.reset();
    } else {
      alert("Todos los datos del pasajero son requeridos");
    }
  }
  onRemovePax(pax: Pax) {
    this.paxes = this.paxes.filter(p => p.dni !== pax.dni);
    localStorage.setItem("paxes", JSON.stringify(this.paxes));
  }
  onFinalizar() {
    localStorage.setItem("fecha", this.fechaEl.nativeElement.value);
    localStorage.setItem("ruta", this.rutaEl.nativeElement.value);
    window.location.href = "confirmar-visitantes";
  }
  onCancel() {
    "fecha,rutas,paxes".split(",").forEach(s => localStorage.removeItem(s));
    this.router.navigate(["home"]);
  }
  onValidateNumber(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }
  loadScript() {
    $(".datepicker").datepicker({
      minDate: 0,
      endDate: new Date(),
      todayHighlight: true,
      format: "dd-mm-yyyy",
      autoclose: true
    });

    $("#fecha-visita").on("changeDate", () => {
      this.fecha = $(".datepicker").datepicker("getFormattedDate");
    });
    $("#datepicker-pax").on("changeDate", () => {
      this.fechaPax = $("#datepicker-pax").datepicker("getFormattedDate");
    });
  }
}

$(document).ready(() => {});
