import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
  Inject
} from "@angular/core";
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
  activePax: Pax;
  fecha: string;
  ruta: string;
  routes: any[];
  fechaPax: string;
  @ViewChild("fechaEl") fechaEl: ElementRef;
  @ViewChild("rutaEl") rutaEl: ElementRef;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.paxes = JSON.parse(localStorage.getItem("paxes")) || [];
    this.routes = JSON.parse(localStorage.getItem("rutas")) || [];
    this.fecha = localStorage.getItem("fecha");
    this.ruta = localStorage.getItem("ruta");
    console.log("RUTA", this.ruta);
    this.loadScript();
  }
  onFinalizar(event) {
    console.log("EVENT", event);
    localStorage.setItem("fecha", this.fechaEl.nativeElement.value);
    localStorage.setItem("ruta", this.rutaEl.nativeElement.value);
    this.router.navigate(["confirmar-visitantes"]);
  }
  onCancel() {
    "fecha,paxes".split(",").forEach(s => localStorage.removeItem(s));
    this.router.navigate(["home"]);
  }
  loadScript() {
    $("#fecha-visita").datepicker({
      minDate: 0,
      startDate: new Date(),
      todayHighlight: true,
      dateFormat: "yy-mm-dd",
      autoclose: true
    });
    $("#fecha-visita").on("changeDate", () => {
      this.fecha = $(".datepicker").datepicker("getFormattedDate");
    });
  }
}

$(document).ready(() => {});
