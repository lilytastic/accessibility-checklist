import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kebab'
})
export class KebabPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? value.replace(/\s/g,'-').replace(/\(/g,'-').replace(/\)/g,'-').toLowerCase() : value;
  }

}
