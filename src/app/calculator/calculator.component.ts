import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

import { Calculator } from './Calculator';


@Component({
  selector: 'angular-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  // View bindings
  currentValue: number;
  operations: any;
  calculator: Calculator;

  constructor() {
    this.calculator = new Calculator();
    this.operations = this.calculator.getOperations();
    this.reset();
  }

  reset() {
    this.calculator.reset();
    this.currentValue = 0;
  }

  /**
    * The new number we will perform the operation with
    **/
  setValue(newValue: number) {
    this.calculator.addValue(newValue);
    this.currentValue = this.calculator.numbers.getFormattedNumbers();
  }

  operate(operation) {
    this.calculator.operate(operation);
    this.currentValue = 0;
  }

  calculate() {
    this.calculator.calculate();
    this.currentValue = this.calculator.getCurrentValue();
  }

  /**
    * Support keyboard entries
    **/
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const operations = this.operations;
    switch(event.key) {
      case "+":
        this.calculator.operate(operations.add);
        break;
      case "-":
        this.calculator.operate(operations.subtract);
        break;
      case "*":
        this.calculator.operate(operations.multiply);
        break;
      case "/":
        this.calculator.operate(operations.divide);
        break;
      case "Enter":
        this.calculator.calculate();
        break;
      default:
        const key = Number(event.key);
        if ( !isNaN(key) && key >= 0 && key <= 9 ) {
          this.calculator.addValue(key);
        }
    }
    this.currentValue = this.calculator.getCurrentValue();
  }
}
