import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router'; // Asegúrate de importar esto

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true, // Asegúrate de que esta línea esté presente si no aparece sola
 
})

export class App {
  constructor(private router: Router) {} // Inyecta el router aquí
  protected readonly title = signal('CalculadoraSencilla');
   calculadoraVisible = false;
   formularioVisible = false;


  toggleCalculadora() {
    this.calculadoraVisible = !this.calculadoraVisible;

    if (this.calculadoraVisible) {
      this.router.navigate(['/calculadora']); // Navega al abrir
    } else {
      this.router.navigate(['/']); // Vuelve al inicio al cerrar (opcional)
    }
  }

  toggleFormulario() {
    this.formularioVisible = !this.formularioVisible;

    if (this.formularioVisible) {
      this.router.navigate(['/funcionalidad-formulario']); // Navega al abrir
    } else {
      this.router.navigate(['/']); // Vuelve al inicio al cerrar (opcional)
    }
  }
  
}

