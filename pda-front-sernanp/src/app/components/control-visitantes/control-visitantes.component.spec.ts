import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlVisitantesComponent } from './control-visitantes.component';

describe('ControlVisitantesComponent', () => {
  let component: ControlVisitantesComponent;
  let fixture: ComponentFixture<ControlVisitantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlVisitantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlVisitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
