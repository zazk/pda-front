import { Component, OnInit } from '@angular/core';
import { Grupo } from '../models/grupo';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user/user.service';
import * as moment from 'moment';

declare var $: any;
@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styles: []
})
export class GruposComponent implements OnInit {
  grupos: Grupo[] = [];
  fecha: string;
  indexPage: number = 1;
  itemsPage: number = 10;
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.grupos = JSON.parse(localStorage.getItem('grupos')) || [];
    console.log('USER', this.service.theUser);
    const user = JSON.parse(this.service.theUser);
    this.service
      .consultaGrupooperador(user.var_cod_operador)
      .subscribe((grupos: any[]) => {
        this.grupos = grupos.map(obj => {
          return new Grupo(
            [],
            obj.var_cod_grupo,
            moment(obj.dte_fec_programada).format('DD-MM-YYYY'),
            obj.srl_cod_ruta,
            obj.num_costo,
            obj.var_cod_operador,
            obj.int_nro_visitante,
            obj.srl_cod_grupo,
            obj.int_nro_inasistente,
            obj.int_estado,
            moment(obj.dte_fec_creacion).format('DD-MM-YYYY')
          );
        });

        localStorage.setItem('grupos', JSON.stringify(this.grupos));
        console.log('GRUPOS?', grupos, 'Grupos Parsed', this.grupos);
      });
    this.loadScripts();
  }

  onSearch(form: any) {
    const grupos = JSON.parse(localStorage.getItem('grupos')) || [];
    this.grupos = grupos.filter((g: Grupo) => {
      if (form.estado) {
        return g.estado === parseInt(form.estado, 10);
      }
      if (form.codigo) {
        return g.codigo.indexOf(form.codigo) >= 0;
      }
      if (this.fecha) {
        return g.fecha === this.fecha;
      }
      return true;
    });
  }

  onClearSearch(form) {
    form.reset();
    this.fecha = '';
    this.onSearch(form);
  }

  onVerGrupo(grupo: Grupo) {
    console.log('Grupo:', grupo);
    this.router.navigate(['ver-visitantes', grupo.id]);
  }

  // JQuery Functions
  loadScripts() {
    $('#datepicker').datepicker({
      minDate: 0,
      startDate: new Date(),
      todayHighlight: true,
      dateFormat: 'dd-mm-yy',
      onSelect: date => {
        this.fecha = date;
      }
    });
  }
}
