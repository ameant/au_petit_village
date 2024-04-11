import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  
  product: Product | undefined;
  imageUrl: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  // Produit récupéré
  ngOnInit(): void {
    const productId = String(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsService.getProductById(productId);
    this.imageUrl = this.productsService.getImageUrlById(productId);
  }
}
