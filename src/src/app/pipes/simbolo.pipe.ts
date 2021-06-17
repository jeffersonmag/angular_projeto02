import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simbolo'
})
export class SimboloPipe implements PipeTransform {

  //transform(value: unknown, ...args: unknown[]): unknown

  transform(unidade: string): string {
    return "[" + unidade + "]";
  }

}
