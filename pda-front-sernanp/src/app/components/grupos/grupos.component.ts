import { Component, OnInit } from "@angular/core";
import { Grupo } from "../../models/grupo";
import { Router } from "@angular/router";
import { UserService } from "../../shared/services/user/user.service";

declare var $: any;
@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.component.html",
  styles: []
})
export class GruposComponent implements OnInit {
  grupos: Grupo[];
  estados: any[] = [
    { text: "Pendiente", class: "warning" },
    { text: "Aceptado", class: "success" },
    { text: "Observado", class: "danger" }
  ];
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.grupos = JSON.parse(localStorage.getItem("grupos")) || [];
    this.service.listGrupos().subscribe((grupos: Grupo[]) => {
      this.grupos = grupos;
      console.log("GRUPOS?", grupos);
    });
  }
  onAceptarGrupo(grupo: Grupo) {
    console.log("Aceptar Grupo:", grupo);
    //this.router.navigate(["ver-visitantes", grupo.codigo]);
  }
  onObservarGrupo(grupo: Grupo) {
    console.log("Observar Grupo:", grupo);
    //this.router.navigate(["ver-visitantes", grupo.codigo]);
  }

}

$(document).ready(() => {});
