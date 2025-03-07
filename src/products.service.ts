import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'Cake', price: 50 },
    { id: 2, name: 'Chocolate Cake', price: 100 },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((p) => p.id === id);
  }

  create(product: { name: string; price: number }) {
    const newProduct = { id: this.products.length + 1, ...product };
    this.products.push(newProduct);
    return newProduct;
  }
}
