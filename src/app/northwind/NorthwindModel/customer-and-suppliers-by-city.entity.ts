import { Duration } from 'angular-odata';


export const CustomerAndSuppliersByCityEntityType = 'NorthwindModel.Customer_and_Suppliers_by_City';
export interface CustomerAndSuppliersByCity {
  City: string;
  CompanyName: string;
  ContactName: string;
  Relationship: string;
}
