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
import * as moment from 'moment';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
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

  onSubmitPax(f: FormGroup) {
    const isDateValid =
      moment(f.value.nacimiento, 'DD-MM-YYYY').isValid() || this.fechaPax;
    if (this.fechaPax) {
      f.value.nacimiento = this.fechaPax;
      f.controls['fecha'].patchValue(this.fechaPax);
    }
    console.log('FORM', f.value, f.controls);

    if (f.valid && isDateValid) {
      this.paxes.push(f.value);
      localStorage.setItem('paxes', JSON.stringify(this.paxes));
      f.reset();
    } else {
      const msg: any[] = [];
      if (!isDateValid) {
        msg.push('Fecha de Nacimiento Inválida');
      }
      if (!f.valid) {
        msg.push('Todos los datos del Pasajero son Obligatorios');
      }
      alert(msg.join(' / '));
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
    this.onValidateKey(event, pattern);
  }

  onValidateDate(event: any) {
    const pattern = /[0-9-\+]/;
    console.log('DATE TYPE ID', event.key);
    this.onValidateKey(event, pattern);
  }

  onValidateKey(event: any, pattern: any) {
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
