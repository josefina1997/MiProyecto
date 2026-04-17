import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from './saludo/saludo';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SaludoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  // Creamos una variable reactiva (signal)
  nombreUsuario = signal('Usuario Inicial');

  cambiarNombre() {
    this.nombreUsuario.set('Programador Angular 💻');
  }
}
