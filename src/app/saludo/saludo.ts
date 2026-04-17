import { Component, input } from '@angular/core'; // Asegúrate de importar 'input'

@Component({
  selector: 'app-saludo',
  standalone: true,
  templateUrl: './saludo.html',
  styleUrl: './saludo.css'
})
export class SaludoComponent {
  // Definimos una entrada llamada 'nombre'
  nombre = input<string>('Invitado'); 
}

