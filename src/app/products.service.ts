import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;

}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [

    // Données des figurines
    { id: "Astérix", name: "Astérix", price: 50, 
    description:"Cette figurine représente Astérix, le célèbre héros gaulois. Elle est soigneusement peinte à la main pour capturer tous les détails emblématiques du personnage, de son casque ailé à sa ceinture remplie de potion magique."},
    { id: "Falbala", name: "Falbala", price: 35,
      description: "Cette figurine représente Falbala, la belle et courageuse jeune femme gauloise. La figurine est minutieusement peinte à la main pour capturer tous les détails de sa tenue et de ses accessoires."},
    { id: "Idéfix", name: "Idéfix", price: 40,
    description: "Cette figurine représente Idéfix, le fidèle compagnon d'Astérix et d'Obélix. La figurine est soigneusement peinte à la main pour capturer tous les détails adorables du petit chien gaulois."},
    { id: "Panoramix", name: "Panoramix", price: 35,
    description: "Cette figurine représente Panoramix, le druide gaulois et mentor d'Astérix. La figurine est minutieusement peinte à la main pour capturer tous les détails de son apparence : sa longue barbe blanche et son chaudron mythique."},
    { id: "Obélix", name: "Obélix", price: 60,
    description: "Cette figurine représente Obélix, l'ami d'Astérix et grand amateur de sanglier. La figurine est soigneusement peinte à la main pour capturer tous les détails de son apparence robuste et de ses accessoires emblématiques."},
    { id: "Trio", name: "Trio", price: 100,
    description: "Cette figurine du trio Astérix, Obélix et Idéfix capture parfaitement l'esprit de camaraderie et de solidarité qui lie ces trois personnages."}
  ];

  // Données des images des figurines
  private productImages: { [key: string]: string } = {
    'Astérix': './assets/images/asterix.png',
    'Falbala': './assets/images/falbala.jpeg',
    'Idéfix': './assets/images/idefix.png',
    'Panoramix': './assets/images/panoramix.jpeg',
    'Obélix': './assets/images/obelix.png',
    'Trio': './assets/images/trio.jpeg',
    
  };

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  // Produit récupéré
  getProductById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  // Image récupérée
  getImageUrlById(id: string): string | undefined {
    return this.productImages[id];
  }
}