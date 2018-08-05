import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pax } from '../../models/pax';

declare var $: any;
@Component({
  selector: 'app-control-visitantes-verificados',
  templateUrl: './control-visitantes-verificados.component.html',
  styles: []
})
export class ControlVisitantesVerificadosComponent implements OnInit {
  paxes: Pax[];
  fecha: string;
  ruta: number;
  rutaActiva: string;
  seq: number;
  year: string;
  grupos: any[];
  grupoActivo: any;
  load: boolean = false;
  filename: string;
  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.grupoActivo = JSON.parse(localStorage.getItem('grupoActivo')) || {};
    this.paxes = this.grupoActivo.visitantes;
    this.fecha = this.grupoActivo.fecha;
    this.rutaActiva = JSON.parse(localStorage.getItem('rutas')).find(
      obj => obj.srl_cod_ruta === parseInt(this.grupoActivo.ruta, 10)
    ).var_nombre;
    this.load = true;
    this.loadScripts();
  }
  onVerificar() {
    this.grupoActivo.documento = this.filename;
    this.service.updateAsistencia(this.grupoActivo).subscribe(r => {
      console.log(r);
      this.router.navigate(['/puesto/revision-grupos']);
    });
  }

  onFileSelect(input: HTMLInputElement) {
    const files = input.files;

    if (files && files.length) {
      const fileToRead = files[0];
      this.service.uploadFile(fileToRead).subscribe(
        data => {
          if (data.message) {
            this.filename = data.message;
          } else {
            console.log(data.error);
            alert(data.error);
          }
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  loadScripts() {
    console.log('LOAD SCRIPTS', $);
    $('#id-input-file-2').ace_file_input({
      no_file: 'Ingresar voucher',
      btn_choose: 'Choose',
      btn_change: 'Cargar',
      droppable: false,
      onchange: null,
      thumbnail: false,
      // | true | large
      whitelist: 'gif|png|jpg|jpeg'
      // blacklist:'exe|php'
      // onchange:''
      //
    });
  }
}
