import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-reporte-rutas',
  templateUrl: './reporte-rutas.component.html',
  styleUrls: ['./reporte-rutas.component.css']
})
export class ReporteRutasComponent implements OnInit {
  rutas: any[] = [];
  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getReporteRutas().subscribe(r => {
      this.rutas = r;
    });
  }
}
