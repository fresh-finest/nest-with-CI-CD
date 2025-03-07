import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsRepository {
  private products: Product[] = [
    { id: 1, name: 'Cake', price: 50 },
    { id: 2, name: 'Chocolate Cake', price: 100 },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  create(product: Omit<Product, 'id'>): Product {
    const newProduct: Product = { ...product, id: this.products.length + 1 };
    this.products.push(newProduct);
    return newProduct;
  }
}
