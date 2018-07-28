import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef
} from '@angular/core';
import { Pax } from '../models/pax';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user/user.service';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ver-visitantes',
  templateUrl: './ver-visitantes.component.html',
  styles: []
})
export class VerVisitantesComponent implements OnInit {
  paxes: Pax[];
  activePax: Pax;
  dialogRef: MatDialogRef<any>;
  fecha: string;
  ruta: number;
  rutaActiva: string;
  seq: number;
  year: string;
  grupos: any[];
  grupoActivo: any;
  load: boolean = false;
  @ViewChild('dialogConfirm') dialogConfirm: TemplateRef<any>;
  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const codigo = params['codigo'];

      this.service.consultaGrupo(codigo).subscribe(r => {
        console.log('HEY GRUPO', r);
        this.grupoActivo = r.grupo;
        this.paxes = this.grupoActivo.visitantes;
        this.fecha = this.grupoActivo.fecha;
        this.rutaActiva = JSON.parse(localStorage.getItem('rutas')).find(
          obj => obj.id === parseInt(this.grupoActivo.ruta, 10)
        ).nombre;
        this.load = true;
      });
    });
  }
  onVerGrupos() {
    this.router.navigate(['grupos']);
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
  onEditar(grupo: any) {
    console.log('GRUPO', grupo);
    this.router.navigate(['modificar-grupo', grupo.id]);
  }
}
