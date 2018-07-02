import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../shared/services/user/user.service";
import { Pax } from "../../models/pax";

@Component({
  selector: "app-modify-grupo",
  templateUrl: "./modify-grupo.component.html",
  styles: []
})
export class ModifyGrupoComponent implements OnInit {

  grupoActivo: any = {};
  paxes: Pax[];
  fecha: string;
  ruta: string;
  load: boolean;
  constructor(
    private service: UserService,
    private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const codigo = params["codigo"];
      this.service.consultaGrupo(codigo).subscribe(r => {
        console.log("HEY GRUPO", r);
        this.grupoActivo = r.grupo;
        this.paxes = this.grupoActivo.visitantes;
        this.fecha = this.grupoActivo.fecha;
        this.ruta = this.grupoActivo.ruta;
        this.load = true;
      });
    });
  }

  onFinalizar(event) {
    console.log("EVENT", event);
    this.grupoActivo.visitantes = JSON.parse(localStorage.getItem("paxes")) || [];
    this.grupoActivo.fecha = localStorage.getItem("fecha");
    this.grupoActivo.ruta = parseInt(localStorage.getItem("ruta"), 10);

    this.service.insertGrupo(grupo).subscribe((r) => {
      this.usuario.num_saldo = r.grupo.operador.num_saldo;
      this.service.theUser = JSON.stringify(this.usuario);
      this.router.navigate(["ver-visitantes", this.grupoActivo.id]);
    });
  }
  onCancel() {
    "fecha,paxes".split(",").forEach(s => localStorage.removeItem(s));
    this.router.navigate(["ver-visitantes", this.grupoActivo.id]);
  }
  onDestroy() {
    "fecha,paxes".split(",").forEach(s => localStorage.removeItem(s));
  }
}
