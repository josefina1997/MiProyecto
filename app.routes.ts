import { CalculatorComponent } from './calculator.component';
import { SaludoComponent } from './saludo/saludo';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'calculadora', component: CalculatorComponent },
  { path: 'saludo', component: SaludoComponent }
];

export default routes;