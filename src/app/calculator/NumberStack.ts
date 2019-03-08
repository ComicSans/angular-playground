export class NumberStack {
  numbers: Array<number> = [];

  addNumbertoStack(_number: number) {
    this.numbers.push(_number);
  }

  clearStack() {
    this.numbers = [];
  }

  getFormattedNumbers(): number {
    if (this.numbers.length === 0) {
      return 0;
    }
    let result = "";
    for (let entry of this.numbers) {
      result = result + String(entry);
    }
    return parseInt(result);
  }
}
