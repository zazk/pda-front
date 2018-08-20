import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-reporte-abonos',
  templateUrl: './reporte-abonos.component.html',
  styles: []
})
export class ReporteAbonosComponent implements OnInit {
  abonos: any[] = [];
  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getReporteAbonos().subscribe(r => {
      this.abonos = r;
    });
  }
}
