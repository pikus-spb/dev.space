import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutes',
  standalone: true,
})
export class MinutesPipe implements PipeTransform {
  transform(value: any): string {
    return String(value).split(':')[1];
  }
}
