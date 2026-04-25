import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-funcionalidad',
  standalone: true,
  imports: [],
  templateUrl: './funcionalidad.html',
  styleUrl: './funcionalidad.css',
})
export class Funcionalidad {
  currentOperand = signal<string>('0');
  previousOperand = signal<string>('');
  operation = signal<string | undefined>(undefined);
  
  // 1. Nuevo Signal para el historial
  historial = signal<string[]>([]);

  appendNumber(num: string) {
    if (num === '.' && this.currentOperand().includes('.')) return;
    if (this.currentOperand() === '0' && num !== '.') {
      this.currentOperand.set(num);
    } else {
      this.currentOperand.set(this.currentOperand() + num);
    }
  }

  chooseOperation(op: string) {
    if (this.currentOperand() === '0' && this.previousOperand() === '') return;
    if (this.previousOperand() !== '') this.compute();
    this.operation.set(op);
    this.previousOperand.set(this.currentOperand());
    this.currentOperand.set('0');
  }

  compute() {
    const prev = parseFloat(this.previousOperand());
    const current = parseFloat(this.currentOperand());
    const operacionActual = this.operation(); // Guardamos el operador antes de borrarlo

    if (isNaN(prev) || isNaN(current) || !operacionActual) return;

    let res: number;
    switch (operacionActual) {
      case '+': res = prev + current; break;
      case '-': res = prev - current; break;
      case '×': res = prev * current; break;
      case '÷': res = prev / current; break;
      default: return;
    }

    // 2. Guardar en el historial antes de resetear valores
    const registro = `${prev} ${operacionActual} ${current} = ${res}`;
    this.historial.update(h => [registro, ...h]); // Agregamos al inicio de la lista

    this.currentOperand.set(res.toString());
    this.operation.set(undefined);
    this.previousOperand.set('');
  }

  clear() {
    this.currentOperand.set('0');
    this.previousOperand.set('');
    this.operation.set(undefined);
  }

  // 3. Función extra para limpiar historial si quieres
  clearHistory() {
    this.historial.set([]);
  }

  delete() {
    if (this.currentOperand() === '0') return;
    const value = this.currentOperand().slice(0, -1);
    this.currentOperand.set(value === '' ? '0' : value);
  }
}
