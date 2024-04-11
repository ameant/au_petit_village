import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  figurines = [
    { name: "Asterix", price: "20 euros" },
    { name: "Falbala", price: "12 euros" },
    { name: "Idefix", price: "15 euros" },
    { name: "Panoramix", price: "12 euros" },
    { name: "Obelix", price: "25 euros" },
    { name: "Trio", price: "30 euros" }
  ]

}