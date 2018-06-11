import { Component, OnInit } from "@angular/core";
import { Pax } from "../models/pax";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-ver-visitantes",
  templateUrl: "./ver-visitantes.component.html",
  styles: []
})
export class VerVisitantesComponent implements OnInit {
  paxes: Pax[];
  fecha: string;
  ruta: number;
  rutaActiva: string;
  seq: number;
  year: string;
  grupos: any[];
  grupoActivo: any;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const numero = params["numero"];
      this.grupos = JSON.parse(localStorage.getItem("grupos")) || [];
      this.grupoActivo = this.grupos.find(obj => obj.numero === numero);
      this.paxes = this.grupoActivo.paxes;
      this.fecha = this.grupoActivo.fecha;
      this.rutaActiva = JSON.parse(localStorage.getItem("rutas")).find(
        obj => obj.srl_cod_ruta === this.grupoActivo.ruta
      ).var_nombre;
    });
  }
  onVerGrupos() {
    this.router.navigate(["grupos"]);
  }
  onRemovePax(pax: Pax) {
    this.paxes = this.paxes.filter(p => p.dni !== pax.dni);
    localStorage.setItem("paxes", JSON.stringify( this.paxes ) );
  }
}
