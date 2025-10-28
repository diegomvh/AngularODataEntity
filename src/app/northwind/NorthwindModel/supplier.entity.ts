import { Duration } from 'angular-odata';

import { Product } from './product.entity';

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
}
