import { Duration } from 'angular-odata';
import { Product } from './product.entity';

export const CategoryEntityType = 'NorthwindModel.Category';
export interface Category {
  CategoryID: number;
  CategoryName: string;
  Description: string;
  Picture: ArrayBuffer;
  Products: Product[];
}
