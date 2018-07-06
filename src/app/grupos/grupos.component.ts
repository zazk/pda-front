import { Component, OnInit } from "@angular/core";
import { Grupo } from "../models/grupo";
import { Router } from "@angular/router";
import { UserService } from "../shared/services/user/user.service";

declare var $: any;
@Component({
  selector: "app-grupos",
  templateUrl: "./grupos.component.html",
  styles: []
})
export class GruposComponent implements OnInit {
  grupos: Grupo[];
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.grupos = JSON.parse(localStorage.getItem("grupos")) || [];
    console.log("USER", this.service.theUser);
    const user = JSON.parse(this.service.theUser);
    this.service
      .consultaGrupooperador(user.var_cod_operador)
      .subscribe((grupos: any[]) => {
        this.grupos = grupos.map(obj => {
          return new Grupo(
            [],
            obj.var_cod_grupo,
            obj.dte_fec_programada,
            obj.srl_cod_ruta,
            obj.num_costo,
            obj.var_cod_operador,
            obj.int_nro_visitante,
            obj.srl_cod_grupo,
            obj.int_nro_inasistente,
            obj.int_estado
          );
        });
        console.log("GRUPOS?", grupos);
      });
  }
  onVerGrupo(grupo: Grupo) {
    console.log("Grupo:", grupo);
    this.router.navigate(["ver-visitantes", grupo.id]);
  }
}

$(document).ready(() => {});
