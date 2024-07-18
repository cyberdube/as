import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanToNumber'
})
export class RomanToNumberPipe implements PipeTransform {

  private romanNumerals = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);

  transform(value: string): number {
    let result = 0;
    for (let i = 0; i < value.length; i++) {
      const current = this.romanNumerals.get(value[i]);
      const next = this.romanNumerals.get(value[i + 1]);

      if (current === undefined) {
        throw new Error(`Invalid Roman numeral: ${value[i]}`);
      }

      if (next !== undefined && current < next) {
        result -= current;
      } else {
        result += current;
      }
    }
    return result;
  }
}
