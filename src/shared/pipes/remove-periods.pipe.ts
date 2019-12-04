import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removePeriods'
})
export class RemovePeriodsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/\./g, '');
  }

}
