import { Component, OnInit } from "@angular/core";
import { Pago } from "../models/pago";

@Component({
  selector: "app-pagos",
  templateUrl: "./pagos.component.html",
  styles: []
})
export class PagosComponent implements OnInit {
  pagos: Pago[];
  constructor() {}

  ngOnInit() {
    this.pagos = JSON.parse(localStorage.getItem("pagos")) || [];
  }
}
