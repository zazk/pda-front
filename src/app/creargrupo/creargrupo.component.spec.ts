import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreargrupoComponent } from './creargrupo.component';

describe('CreargrupoComponent', () => {
  let component: CreargrupoComponent;
  let fixture: ComponentFixture<CreargrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreargrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreargrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
