import {
  EventEmitter,
  Component,
  OnInit,
  Input,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { Pax } from '../../models/pax';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Ruta } from '../../models/ruta';
import { UserService } from '../../shared/services/user/user.service';

declare var $: any;
@Component({
  selector: 'app-update-visitantes',
  templateUrl: './update-visitantes.component.html',
  styles: []
})
export class UpdateVisitantesComponent implements OnInit {
  @Input() paxes: Pax[] = [];
  @Input() edicion: boolean = false;
  @Output() cancel = new EventEmitter();
  @Output() finalizar = new EventEmitter();
  @ViewChild('dialogConfirm') dialogConfirm: TemplateRef<any>;
  dni: string = '';
  fechaPax: string;
  activePax: Pax;
  dialogRef: MatDialogRef<any>;
  rutaActiva: Ruta;
  ruta: number;
  typeID: number = 0;
  paises: any[] = [];
  constructor(private dialog: MatDialog, private service: UserService) {}

  ngOnInit() {
    this.paises = JSON.parse(localStorage.getItem('paises'));
    this.paxes = JSON.parse(localStorage.getItem('paxes')) || [];
    this.rutaActiva = JSON.parse(localStorage.getItem('rutas')).find(
      obj => obj.id === this.service.ruta
    );
    console.log('Ruta Activa:', this.rutaActiva, 'SERVICE:', this.service.ruta);
    this.service.rutaObs.subscribe(ruta => {
      this.rutaActiva = JSON.parse(localStorage.getItem('rutas')).find(
        obj => obj.id === parseInt(ruta, 10)
      );
    });

    this.loadScript();
  }

  onSubmitPax(f: NgForm) {
    console.log(f);
    f.value.nacimiento = this.fechaPax;
    if (f.valid && this.fechaPax) {
      this.paxes.push(f.value);
      localStorage.setItem('paxes', JSON.stringify(this.paxes));
      f.reset();
    } else {
      alert('Todos los datos del pasajero son requeridos');
    }
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
  onUpdateID(event: any) {
    this.typeID = parseInt(event.target.value, 10);
    console.log('DOCUMENT', this.dni);
    this.dni = '';
  }
  onValidateID(event: any) {
    let pattern = /[0-9\+]/;
    if (this.typeID !== 1) {
      pattern = /[A-Za-z0-9\+]/;
    }
    console.log('TYPE ID', this.typeID);
    if (
      !pattern.test(event.key) &&
      !(event.key === 'Tab') &&
      !(event.key === 'Backspace')
    ) {
      event.preventDefault();
    }
  }

  onConfirmRemovePax() {
    this.paxes = this.paxes.filter(p => p.dni !== this.activePax.dni);
    localStorage.setItem('paxes', JSON.stringify(this.paxes));
    this.dialogRef.close();
  }

  loadScript() {
    $('#datepicker-paxer').datepicker({
      maxDate: new Date(),
      todayHighlight: true,
      dateFormat: 'dd-mm-yy',
      autoclose: true,
      changeMonth: true,
      changeYear: true,
      yearRange: '1920:' + new Date().getFullYear(),
      onSelect: date => {
        this.fechaPax = date;
      }
    });
  }
}
