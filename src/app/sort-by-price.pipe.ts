import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(figurines: any[]): any[] {
    return figurines.sort((a, b) => a.price - b.price);
  }

}

