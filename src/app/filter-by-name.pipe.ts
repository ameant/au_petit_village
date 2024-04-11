import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  // Filtre de recherche par nom
  transform(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm) {
      return products;
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowerSearchTerm)
    );
  }

}
