

import { Product } from './product.entity';

// #region Custom
// #endregion Custom
export const CategoryEntityType = 'NorthwindModel.Category';
export interface Category {
  CategoryID: number;
  CategoryName: string;
  Description: string;
  Picture: ArrayBuffer;
  Products?: Product[];
// #region Custom
// #endregion Custom
}
