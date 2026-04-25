import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funcionalidad } from './funcionalidad';

describe('Funcionalidad', () => {
  let component: Funcionalidad;
  let fixture: ComponentFixture<Funcionalidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Funcionalidad],
    }).compileComponents();

    fixture = TestBed.createComponent(Funcionalidad);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
