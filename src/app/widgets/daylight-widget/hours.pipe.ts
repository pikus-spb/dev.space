import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours',
  standalone: true,
})
export class HoursPipe implements PipeTransform {
  transform(value: any): string {
    return String(value).split(':')[0];
  }
}
