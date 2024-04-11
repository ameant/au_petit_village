import { ProductsService, Product  } from '../products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  products: Product[] = [];
  sortOrder: 'asc' | 'desc' = 'asc';
  searchTerm: string = '';

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  // Produit récupéré
  goToProduct(productId: string): void {
    this.router.navigate(['/product', productId]);
  }

  // Filtre par prix croissants et décroissants
  sortProducts(order: 'asc' | 'desc'): void {
    this.sortOrder = order;
  }
}
