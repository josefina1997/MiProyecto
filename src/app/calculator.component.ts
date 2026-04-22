import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  result: number = 0;
  firstNumber: number = 0;
  secondNumber: number = 0;

  add() {
    this.result = this.firstNumber + this.secondNumber;
  }

  subtract() {
    this.result = this.firstNumber - this.secondNumber;
  }

  multiply() {
    this.result = this.firstNumber * this.secondNumber;
  }

  divide() {
    if (this.secondNumber !== 0) {
      this.result = this.firstNumber / this.secondNumber;
    } else {
      this.result = NaN; // Handle division by zero
    }
  }
}