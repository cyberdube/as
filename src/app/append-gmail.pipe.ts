import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendGmail'
})
export class AppendGmailPipe implements PipeTransform {

  transform(value: string): string {
    return `${value}@gmail.com`;
  }
}
