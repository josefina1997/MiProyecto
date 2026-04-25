import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionalidadFormulario } from './funcionalidad-formulario';

describe('FuncionalidadFormulario', () => {
  let component: FuncionalidadFormulario;
  let fixture: ComponentFixture<FuncionalidadFormulario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncionalidadFormulario],
    }).compileComponents();

    fixture = TestBed.createComponent(FuncionalidadFormulario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
