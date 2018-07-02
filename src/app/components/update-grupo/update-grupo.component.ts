import { Component, OnInit, Input } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-update-grupo",
  templateUrl: "./update-grupo.component.html",
  styles: []
})
export class UpdateGrupoComponent implements OnInit {
  @Input() fecha: string;
  @Input() ruta: string;
  routes: any[] = [];

  constructor() {}

  ngOnInit() {

    this.routes = JSON.parse(localStorage.getItem("rutas")) || [];
    this.fecha = localStorage.getItem("fecha");
    this.ruta = localStorage.getItem("ruta");
    this.loadScript();
  }
  onChangeRuta(value: any) {
    console.log("Value", value);
    this.ruta = value;
    localStorage.setItem("ruta", value);
  }
  loadScript() {
    $("#fecha-visita-grupo").datepicker({
      minDate: 0,
      startDate: new Date(),
      todayHighlight: true,
      dateFormat: "yy-mm-dd",
      autoclose: true,
      onSelect: date => {
        console.log("GOGOGO", date, this);
        this.fecha = date;
        localStorage.setItem("fecha", this.fecha);
      }
    });
  }
}
