import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../shared/services/user/user.service';
import { Pax } from '../models/pax';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pago } from '../models/pago';
import { Grupo } from '../models/grupo';
import * as moment from 'moment';
import { Operador } from '../models/operador';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  routes: any[] = [];
  minFeeRoute: number = 0;
  paxes: Pax[] = [];
  paxesTmp: Pax[] = [];
  fecha: string;
  disabled: boolean = true;
  user: any;
  constructor(private router: Router, private service: UserService) {}

  ngOnInit() {
    this.loadScripts();
    this.user = JSON.parse(this.service.theUser) || {};
    this.paxesTmp = JSON.parse(localStorage.getItem('paxes')) || [];
    this.routes = JSON.parse(localStorage.getItem('rutas')) || [];
    this.service
      .listPaises()
      .subscribe(paises =>
        localStorage.setItem('paises', JSON.stringify(paises))
      );
    this.disabled = this.user.num_saldo <= 0;
  }

  onSubmit(form: NgForm): void {
    console.log(
      'Por favor seleccione fecha',
      form.value,
      'fecha',
      this.fecha,
      form.value.ruta
    );
    if (this.fecha && form.value.ruta) {
      localStorage.setItem('paxes', JSON.stringify(this.paxes) || '[]');
      localStorage.setItem('fecha', this.fecha);
      localStorage.setItem('ruta', form.value.ruta);
      this.router.navigate(['ingreso-visitantes']);
    } else {
      console.log('Por favor seleccione fecha', this.fecha, form.value.ruta);
      const msg = [];
      if (!this.fecha) {
        msg.push('Seleccione Fecha de Visita');
      }
      if (!form.value.ruta) {
        msg.push('Seleccione Ruta');
      }
      alert(msg.join(' / '));
    }
  }
  onChangeRuta(event): void {
    console.log('Event', event);
  }
  onUpdateDate($event) {}

  onFileSelect(input: HTMLInputElement) {
    const files = input.files;

    if (files && files.length) {
      console.log('Filename: ' + files[0].name);
      console.log('Type: ' + files[0].type);
      console.log('Size: ' + files[0].size + ' bytes');

      const fileToRead = files[0];

      const fileReader = new FileReader();
      fileReader.onload = (fileLoadedEvent: any) => {
        const textFromFileLoaded = fileLoadedEvent.target.result;
        this.paxes = textFromFileLoaded
          .split('\n')
          .slice(1)
          .reduce(function(a, b) {
            if (a.indexOf(b) < 0) {
              a.push(b);
            }
            return a;
          }, [])
          .map(o => {
            const pax = Pax.mapFromImport(o.split(','));
            pax.nacimiento = moment(pax.nacimiento, 'l').format('DD-MM-YYYY');
            return pax;
          })
          .slice(0, 15);
        console.log('CONTENT FILE', this.paxes);
      };

      fileReader.readAsText(fileToRead, 'UTF-8');
    }
  }
  // JQuery Functions
  loadScripts() {
    $('.chosen-select').chosen();
    $('#id-input-file-2').ace_file_input({
      no_file: 'Cargar lista de visitantes',
      btn_choose: 'Importar',
      btn_change: 'Cambiar',
      droppable: false,
      onchange: null,
      thumbnail: false
    });
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
