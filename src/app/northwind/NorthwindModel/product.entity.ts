import { Duration } from 'angular-odata';

import { Category } from './category.entity';
import { OrderDetail } from './order-detail.entity';
import { Supplier } from './supplier.entity';

export const ProductEntityType = 'NorthwindModel.Product';
export interface Product {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: boolean;
  Category?: Category;
  Order_Details?: OrderDetail[];
  Supplier?: Supplier;
}
