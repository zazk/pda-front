import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../shared/services/user/user.service";
import { Grupo } from "../../models/grupo";

@Component({
  selector: "app-revision-grupos",
  templateUrl: "./revision-grupos.component.html",
  styles: []
})
export class RevisionGruposComponent implements OnInit {
  grupos: Grupo[];
  routes: any[];
  fecha: Date = new Date();
  estados: any[] = [
    { text: "Pendiente", class: "warning" },
    { text: "Aceptado", class: "success" },
    { text: "Observado", class: "danger" }
  ];
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.grupos = JSON.parse(localStorage.getItem("grupos")) || [];
    this.service.listGruposHoy().subscribe((grupos: Grupo[]) => {
      this.grupos = grupos;
      localStorage.setItem("grupos", JSON.stringify(this.grupos));
      console.log("GRUPOS??????", grupos);
    });

    this.service.listRutas().subscribe(data => {
      console.log("DATA :", data);
      this.routes = data;
      localStorage.setItem("rutas", JSON.stringify(this.routes));
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
  onSearch(form: any) {
    const pagos = JSON.parse(localStorage.getItem("pagos")) || [];
    this.grupos = pagos.filter((p: Grupo) => {
      if (form.operador) {
        return p.codigo.indexOf(form.operador) >= 0;
      }
      if (form.operacion) {
        return p.fecha.indexOf(form.operacion) >= 0;
      }
      return true;
    });
  }
  onClearSearch(form) {
    form.reset();
    this.onSearch(form);
  }
}
