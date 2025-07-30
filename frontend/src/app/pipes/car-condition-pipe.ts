import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carCondition'
})
export class CarConditionPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(value: number): string {
    let tag = "";

    if(value == 0) {
      tag = "Nuevo";
    } else if(value < 100 ) {
      tag = "Km 0";
    }else {
      tag = "Ocasión";
    }
    
    return `${tag}`;
  }

}
