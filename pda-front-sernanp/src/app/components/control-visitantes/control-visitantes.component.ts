import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pax } from '../../models/pax';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-control-visitantes',
  templateUrl: './control-visitantes.component.html',
  styles: []
})
export class ControlVisitantesComponent implements OnInit {
  paxes: Pax[];
  fecha: string;
  ruta: number;
  rutaActiva: string;
  seq: number;
  year: string;
  grupos: any[];
  grupoActivo: any;
  load: boolean = false;
  indexPage: number = 1;
  itemsPage: number = 10;
  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const codigo = params['codigo'];
      this.grupos = JSON.parse(localStorage.getItem('grupos')) || [];
      this.service.consultaGrupo(codigo).subscribe(r => {
        this.grupoActivo = r.grupo;
        this.paxes = this.grupoActivo.visitantes;
        this.fecha = this.grupoActivo.fecha;
        this.rutaActiva = JSON.parse(localStorage.getItem('rutas')).find(
          obj => obj.srl_cod_ruta === parseInt(this.grupoActivo.ruta, 10)
        ).var_nombre;
        this.load = true;
      });
    });
  }
  onVerGrupos() {
    this.router.navigate(['/puesto/revision-grupos']);
  }
  updatePaxVerificado(option, event) {
    console.log('CHECKED:', event.target.checked, 'Option:', option);
    this.grupoActivo.visitantes[option].asistio = event.target.checked;
    console.log('GRUPO ACTIVO', this.grupoActivo.visitantes);
  }
  checkAllPaxes(event) {
    this.grupoActivo.visitantes = this.grupoActivo.visitantes.map((v: Pax) => {
      v.asistio = event.target.checked;
      return v;
    });
    console.log('PAXES', this.grupoActivo.visitantes);
  }
  onFinalizar() {
    this.grupoActivo.visitantes = this.grupoActivo.visitantes.map((v: Pax) => {
      if (v.asistio === null) {
        v.asistio = false;
      }
      return v;
    });
    localStorage.setItem('grupoActivo', JSON.stringify(this.grupoActivo));
    console.log('GRUPO ACTIVO', this.grupoActivo);
    this.router.navigate(['control-visitantes-verificados']);
  }
}
