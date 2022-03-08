import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMensajeGmComponent } from './formulario-mensaje-gm.component';

describe('FormularioMensajeGmComponent', () => {
  let component: FormularioMensajeGmComponent;
  let fixture: ComponentFixture<FormularioMensajeGmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioMensajeGmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMensajeGmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
