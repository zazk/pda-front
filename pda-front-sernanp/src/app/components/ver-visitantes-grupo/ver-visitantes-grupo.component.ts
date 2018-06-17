import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Grupo } from '../../models/grupo';

@Component({
  selector: 'app-ver-visitantes-grupo',
  templateUrl: './ver-visitantes-grupo.component.html',
  styles: []
})
export class VerVisitantesGrupoComponent implements OnInit {

  paxes: Pax[];
  fecha: string;
  ruta: number;
  rutaActiva: string;
  seq: number;
  year: string;
  grupos: any[];
  grupoActivo: any;
  load: boolean = false;
  filename: string;
  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const codigo = params["codigo"];
      this.grupos = JSON.parse(localStorage.getItem("grupos")) || [];
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

}
