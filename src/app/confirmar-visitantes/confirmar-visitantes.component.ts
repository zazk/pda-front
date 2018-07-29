import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef
} from '@angular/core';
import { Pax } from '../models/pax';
import { Router } from '@angular/router';
import { Utils } from '../shared/utils/utils';
import { Grupo } from '../models/grupo';
import { UserService } from '../shared/services/user/user.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { User } from '../../../pda-front-sernanp/src/app/models/user';
import { Ruta } from '../models/ruta';

declare var $: any;
@Component({
  selector: 'app-confirmar-visitantes',
  templateUrl: './confirmar-visitantes.component.html',
  styles: []
})
export class ConfirmarVisitantesComponent implements OnInit {
  paxes: Pax[] = [];
  activePax: Pax;
  fecha: string;
  ruta: number;
  rutaActiva: Ruta;
  year: string;
  grupos: any[] = [];
  usuario: any;
  dialogRef: MatDialogRef<any>;
  isLoading: boolean = false;
  @ViewChild('dialogConfirm') dialogConfirm: TemplateRef<any>;
  constructor(
    private router: Router,
    private service: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('currentUser')) || {};
    this.paxes = JSON.parse(localStorage.getItem('paxes'));
    this.grupos = JSON.parse(localStorage.getItem('grupos')) || [];
    this.year =
      JSON.parse(localStorage.getItem('year')) || new Date().getFullYear();
    this.fecha = localStorage.getItem('fecha');
    this.ruta = parseInt(localStorage.getItem('ruta'), 10);
    this.rutaActiva = JSON.parse(localStorage.getItem('rutas')).find(
      obj => obj.id === this.ruta
    );
  }
  onFinalizar() {
    this.isLoading = true;
    const grupo = new Grupo(
      this.paxes,
      '',
      this.fecha,
      this.ruta,
      0,
      this.usuario.var_cod_operador
    );
    console.log('GRUPO', grupo);
    this.service.insertGrupo(grupo).subscribe(r => {
      console.log('GRUPO INSERTADO?', r);
      this.grupos.push(grupo);
      this.usuario.num_saldo = r.grupo.operador.num_saldo;
      this.service.theUser = JSON.stringify(this.usuario);
      localStorage.setItem('grupos', JSON.stringify(this.grupos));
      localStorage.setItem('grupoInsertado', JSON.stringify(r));
      this.router.navigate(['resumen-visitantes']);
      this.isLoading = false;
    });
    return;
  }
  onAgregarPax() {
    this.router.navigate(['ingreso-visitantes']);
  }

  onRemovePax(pax: Pax): void {
    this.openDialog(pax);
    return;
  }
  openDialog(pax: Pax): void {
    this.activePax = pax;
    this.dialogRef = this.dialog.open(this.dialogConfirm, {
      width: '250px',
      data: { pax: pax }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onConfirmRemovePax() {
    this.paxes = this.paxes.filter(p => p.dni !== this.activePax.dni);
    localStorage.setItem('paxes', JSON.stringify(this.paxes));
    this.dialogRef.close();
  }
}

$(document).ready(() => {});
