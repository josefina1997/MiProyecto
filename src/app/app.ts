import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CalculatorComponent } from './calculator/calculator.component';
import { SaludoComponent } from './saludo/saludo.component';

@NgModule({
  declarations: [
    SaludoComponent,
    CalculatorComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CalculatorComponent,
  ],
  bootstrap: [SaludoComponent]
})
export class AppModule {}