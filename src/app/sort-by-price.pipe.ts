import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  // Filtre de recherche prix croissnts ou décroissants
  transform(products: Product[], order: 'asc' | 'desc' = 'asc'): Product[] {
    return products.sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

}

