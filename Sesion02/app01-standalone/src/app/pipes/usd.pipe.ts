import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd',
  standalone: true
})
export class UsdPipe implements PipeTransform {

  transform(value: number, cambio: number): number {
    return Math.round(value/cambio);
  }

}
