import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteRutasComponent } from './reporte-rutas.component';

describe('ReporteRutasComponent', () => {
  let component: ReporteRutasComponent;
  let fixture: ComponentFixture<ReporteRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
