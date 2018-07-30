import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user/user.service';
import { Grupo } from '../../models/grupo';

@Component({
  selector: 'app-revision-grupos',
  templateUrl: './revision-grupos.component.html',
  styles: []
})
export class RevisionGruposComponent implements OnInit {
  grupos: Grupo[];
  routes: any[];
  fecha: Date = new Date();
  indexPage: number = 1;
  itemsPage: number = 10;
  estados: any[] = [
    { text: 'Pendiente', class: 'warning' },
    { text: 'Registrado', class: 'success' },
    { text: 'Observado', class: 'danger' }
  ];
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.grupos = JSON.parse(localStorage.getItem('grupos')) || [];
    this.service.listGruposHoy().subscribe((grupos: Grupo[]) => {
      this.grupos = grupos;
      localStorage.setItem('grupos', JSON.stringify(this.grupos));
      console.log('GRUPOS??????', grupos);
    });

    this.service.listRutas().subscribe(data => {
      console.log('DATA :', data);
      this.routes = data;
      localStorage.setItem('rutas', JSON.stringify(this.routes));
    });
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
