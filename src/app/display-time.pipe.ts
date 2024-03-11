import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayTime'
})
export class DisplayTimePipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined) {
      return '';
    }

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    let result = '';
    if (hours > 0) {
      result += `${hours} hours `;
    }
    if (minutes > 0) {
      result += `${minutes} minutes`;
    }

    return result.trim();
  }

}
