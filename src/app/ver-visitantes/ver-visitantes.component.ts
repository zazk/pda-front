import { Component, OnInit } from "@angular/core";
import { Pax } from "../models/pax";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../shared/services/user/user.service";

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
  load: boolean = false;
  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const codigo = params["codigo"];

      this.service.consultaGrupo(codigo).subscribe(r => {
        console.log("HEY GRUPO", r);
        this.grupoActivo = r.grupo;
        this.paxes = this.grupoActivo.visitantes;
        this.fecha = this.grupoActivo.fecha;
        this.rutaActiva = JSON.parse(localStorage.getItem("rutas")).find(
          obj => obj.srl_cod_ruta === parseInt(this.grupoActivo.ruta, 10)
        ).var_nombre;
        this.load = true;
      });
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
