import { Component, OnInit } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user/user.service';

declare var $: any;
declare var ace: any;
declare var bootbox: any;
@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styles: []
})
export class GruposComponent implements OnInit {
  grupos: Grupo[];
  routes: any[];
  indexPage: number = 1;
  itemsPage: number = 10;
  urlFiles: string = '';
  estados: any[] = [
    { text: 'Pendiente', class: 'warning' },
    { text: 'Verificado', class: 'primary' },
    { text: 'Observado', class: 'default' },
    { text: 'Aceptado', class: 'success' },
    { text: 'Rechazado', class: 'danger' }
  ];
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.urlFiles = this.service.url + 'file/';
    this.grupos = JSON.parse(localStorage.getItem('grupos')) || [];
    this.service.listGrupos().subscribe((grupos: Grupo[]) => {
      this.grupos = grupos;
      localStorage.setItem('grupos', JSON.stringify(this.grupos));
      console.log('GRUPOS?', grupos);
    });

    this.service.listRutas().subscribe(data => {
      console.log('DATA :', data);
      this.routes = data;
      localStorage.setItem('rutas', JSON.stringify(this.routes));
    });
  }
  onAceptarGrupo(grupo: Grupo) {
    console.log('Aceptar Grupo:', grupo);
    this.service.updateGrupoaprobado(grupo.id).subscribe(r => {
      console.log(r);
      this.grupos = this.grupos.map(g => {
        if (g.codigo === grupo.codigo) {
          g.estado = r.estado;
        }
        return g;
      });
      localStorage.setItem('pagos', JSON.stringify(this.grupos));
    });
  }
  onObservarGrupo(grupo: Grupo) {
    console.log('Observar Grupo:', grupo);

    bootbox.prompt('Motivo de rechazo', motivo => {
      console.log('RETURN RECHAZO', motivo);
      if (motivo) {
        this.service.updateGruporechazo(grupo.id, motivo).subscribe(r => {
          console.log(r);
          this.grupos = this.grupos.map(g => {
            if (g.codigo === grupo.codigo) {
              g.estado = r.estado;
              g.observacion = motivo;
            }
            return g;
          });
          localStorage.setItem('pagos', JSON.stringify(this.grupos));
        });
      } else {
      }
    });
  }
  onSearch(form: any) {
    const grupos = JSON.parse(localStorage.getItem('grupos')) || [];
    console.log('grupos', grupos);
    this.grupos = grupos.filter((g: Grupo) => {
      if (form.codigo) {
        return g.codigo.indexOf(form.codigo) >= 0;
      }
      if (form.estado) {
        return g.estado == form.estado;
      }
      return true;
    });
  }
  onClearSearch(form) {
    form.reset();
    this.onSearch(form);
  }
}

$(document).ready(() => {});
