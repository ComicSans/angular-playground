import { NumberStack } from './NumberStack';

export enum Operations {
  add, subtract, multiply, divide
}

export class Calculator {
  operation: number;
  numbers: NumberStack;
  lastValue: number;
  currentValue: number;

  getOperations(): typeof Operations {
    return Operations;
  }

  reset() {
    this.numbers = new NumberStack();
    this.currentValue = 0;
    this.lastValue = 0;
    this.operation = null;
  }

  addValue(newValue: number) {
    this.numbers.addNumbertoStack(newValue);
    this.currentValue = this.numbers.getFormattedNumbers();
  }

  operate(operation) {
    this.lastValue = this.currentValue;
    this.operation = operation;
    this.numbers.clearStack();
    this.currentValue = 0;
  }

  calculate() {
    var value;
    switch (this.operation) {
      case Operations.add: {
        value = this.currentValue + this.lastValue;
        break;
      }
      case Operations.subtract: {
        value = this.lastValue - this.currentValue;
        break;
      }
      case Operations.multiply: {
        value = this.currentValue * this.lastValue;
        break;
      }
      case Operations.divide: {
        value = this.lastValue / this.currentValue;
        break;
      }
    }
    this.operation = null;
    this.currentValue = value;
    this.lastValue = value;
    this.numbers.clearStack();
  }

  getCurrentValue(): number {
    return this.currentValue;
  }
}
