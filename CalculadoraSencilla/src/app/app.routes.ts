import { Routes } from '@angular/router';
import { Funcionalidad } from '../calculadora-basica/funcionalidad/funcionalidad';
import { FuncionalidadFormulario } from '../formulario/funcionalidad-formulario/funcionalidad-formulario';

export const routes: Routes = [
  { path: 'calculadora', component: Funcionalidad },
  { path: 'funcionalidad-formulario', component: FuncionalidadFormulario },
  // Esto redirige la página principal a la calculadora automáticamente:
  { path: '', redirectTo: 'calculadora', pathMatch: 'full' },
  { path: '', redirectTo: 'funcionalidad-formulario', pathMatch: 'full' }
];