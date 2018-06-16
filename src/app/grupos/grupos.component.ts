import { Component, OnInit } from "@angular/core";
import { Grupo } from "../models/grupo";
import { Router } from "@angular/router";

declare var $: any;
@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.component.html",
  styles: []
})
export class GruposComponent implements OnInit {
  grupos: Grupo[];
  constructor( private router: Router) {}

  ngOnInit() {
    this.grupos = JSON.parse(localStorage.getItem("grupos")) || [];
  }
  onVerGrupo(grupo: Grupo) {
    console.log("Grupo:", grupo);
    this.router.navigate(["ver-visitantes", grupo.codigo]);
  }
}

$(document).ready(() => {});
