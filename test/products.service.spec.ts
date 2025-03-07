import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from 'src/products.service';


describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should return all products', () => {
    expect(service.findAll()).toHaveLength(2);
  });

  it('should return a single product', () => {
    expect(service.findOne(1)).toEqual({ id: 1, name: 'Cake', price: 50 });
  });
});
