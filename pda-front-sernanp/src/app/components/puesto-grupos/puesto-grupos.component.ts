import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user/user.service';
import { Grupo } from '../../models/grupo';
declare var $: any;

@Component({
  selector: 'app-puesto-grupos',
  templateUrl: './puesto-grupos.component.html'
})
export class PuestoGruposComponent implements OnInit {
  grupos: Grupo[];
  routes: any[];
  indexPage: number = 1;
  itemsPage: number = 10;
  urlFiles: string = '';
  fecha: string = '';
  estados: any[] = [
    { text: 'Pendiente', class: 'warning' },
    { text: 'Aceptado', class: 'success' },
    { text: 'Observado', class: 'danger' }
  ];
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.urlFiles = this.service.url + 'file/';
    this.grupos = JSON.parse(localStorage.getItem('grupos')) || [];
    this.service.listGrupos().subscribe((grupos: Grupo[]) => {
      this.grupos = grupos;
      localStorage.setItem('grupos', JSON.stringify(this.grupos));
      console.log('GRUPOS??????', grupos);
    });

    this.service.listRutas().subscribe(data => {
      console.log('DATA :', data);
      this.routes = data;
      localStorage.setItem('rutas', JSON.stringify(this.routes));
    });

    this.loadScripts();
  }
  onAceptarGrupo(grupo: Grupo) {
    console.log('Aceptar Grupo:', grupo);
    //this.router.navigate(["ver-visitantes", grupo.codigo]);
  }
  onObservarGrupo(grupo: Grupo) {
    console.log('Observar Grupo:', grupo);
    //this.router.navigate(["ver-visitantes", grupo.codigo]);
  }

  onSearch(form: any) {
    const gruposFull = JSON.parse(localStorage.getItem('grupos')) || [];
    console.log('grupos', gruposFull, 'fecha', this.fecha);
    this.grupos = gruposFull.filter((g: Grupo) => {
      if (form.codigo) {
        return g.codigo.indexOf(form.codigo) >= 0;
      }
      if (form.estado) {
        return g.estado == form.estado;
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
  // JQuery Functions
  loadScripts() {
    $('#datepicker').datepicker({
      todayHighlight: true,
      dateFormat: 'dd-mm-yy',
      onSelect: date => {
        console.log('DATE', date);
        this.fecha = date;
      }
    });
  }
}
