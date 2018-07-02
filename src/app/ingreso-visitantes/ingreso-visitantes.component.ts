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
  fechaPax: string;
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }
  onFinalizar(event) {
    console.log("EVENT", event);
    this.router.navigate(["confirmar-visitantes"]);
  }
  onCancel() {
    "fecha,paxes".split(",").forEach(s => localStorage.removeItem(s));
    this.router.navigate(["home"]);
  }
}

$(document).ready(() => {});
