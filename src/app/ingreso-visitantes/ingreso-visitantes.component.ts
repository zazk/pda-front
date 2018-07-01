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
import { MatDialog, MatDialogRef } from "@angular/material";

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
  dialogRef: MatDialogRef<any>;
  @ViewChild("dialogConfirm") dialogConfirm: TemplateRef<any>;
  @ViewChild("fechaEl") fechaEl: ElementRef;
  @ViewChild("rutaEl") rutaEl: ElementRef;

  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {}

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
  onRemovePax(pax: Pax): void {
    this.openDialog(pax);
    return;
  }
  onFinalizar() {
    localStorage.setItem("fecha", this.fechaEl.nativeElement.value);
    localStorage.setItem("ruta", this.rutaEl.nativeElement.value);
    this.router.navigate(["confirmar-visitantes"]);
  }
  onCancel() {
    "fecha,paxes".split(",").forEach(s => localStorage.removeItem(s));
    this.router.navigate(["home"]);
  }
  onValidateNumber(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  openDialog(pax: Pax): void {
    this.activePax = pax;
    this.dialogRef = this.dialog.open(this.dialogConfirm, {
      width: "250px",
      data: { pax: pax }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  onConfirmRemovePax() {
    this.paxes = this.paxes.filter(p => p.dni !== this.activePax.dni);
    localStorage.setItem("paxes", JSON.stringify(this.paxes));
    this.dialogRef.close();
  }
  loadScript() {
    $("#fecha-visita").datepicker({
      minDate: 0,
      startDate: new Date(),
      todayHighlight: true,
      dateFormat: "yy-mm-dd",
      autoclose: true
    });

    $("#datepicker-pax").datepicker({
      maxDate: new Date(),
      todayHighlight: true,
      dateFormat: "yy-mm-dd",
      autoclose: true,
      changeMonth: true,
      changeYear: true,
      yearRange: "1920:" + (new Date().getFullYear())
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
