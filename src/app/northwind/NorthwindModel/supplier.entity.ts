

import { Product } from './product.entity';

// #region Custom
// #endregion Custom
export const SupplierEntityType = 'NorthwindModel.Supplier';
export interface Supplier {
  SupplierID: number;
  CompanyName: string;
  ContactName: string;
  ContactTitle: string;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  Phone: string;
  Fax: string;
  HomePage: string;
  Products?: Product[];
// #region Custom
// #endregion Custom
}
