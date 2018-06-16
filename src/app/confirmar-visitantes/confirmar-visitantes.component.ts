import { Component, OnInit } from "@angular/core";
import { Pax } from "../models/pax";
import { Router } from "@angular/router";
import { Utils } from "../shared/utils/utils";
import { Grupo } from "../models/grupo";
import { UserService } from "../shared/services/user/user.service";
import { User } from "../../../pda-front-sernanp/src/app/models/user";

declare var $: any;
@Component({
  selector: "app-confirmar-visitantes",
  templateUrl: "./confirmar-visitantes.component.html",
  styles: []
})
export class ConfirmarVisitantesComponent implements OnInit {

  paxes: Pax[];
  fecha: string;
  ruta: number;
  rutaActiva: string;
  seq: number;
  year: string;
  grupos: any[];
  usuario: any;
  constructor( private router: Router, private service: UserService) {}

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem("currentUser")) || {};
    this.seq = JSON.parse(localStorage.getItem("sequence")) || 0;

    this.paxes = JSON.parse(localStorage.getItem("paxes"));
    this.grupos = JSON.parse(localStorage.getItem("grupos")) || [];
    this.year = JSON.parse(localStorage.getItem("year")) || (new Date().getFullYear());
    this.fecha = localStorage.getItem("fecha");
    this.ruta = parseInt(localStorage.getItem("ruta"), 10);
    this.rutaActiva = JSON.parse( localStorage.getItem("rutas") )
      .find( obj => obj.srl_cod_ruta === this.ruta ).var_nombre;
  }
  onFinalizar() {
    const sequence = Utils.sequence( ++this.seq  , this.year );
    const grupo = new Grupo( this.paxes, sequence, this.fecha, this.ruta, 0, this.usuario.var_cod_operador );
    console.log("GRUPO", grupo);
    this.service.insertGrupo(grupo).subscribe((r) => {
      console.log("GRUPO INSERTADO?", r);

      this.grupos.push(grupo);
      localStorage.setItem( "grupos", JSON.stringify( this.grupos ) );
      localStorage.setItem( "sequence", this.seq.toString()  );
      this.router.navigate(["resumen-visitantes"]);
    });
    return;

  }
  onAgregarPax() {
    this.router.navigate(["ingreso-visitantes"]);
  }
}

$(document).ready(() => {

});
