import { Duration } from 'angular-odata';
import { Order } from './order.entity';
import { CustomerDemographic } from './customer-demographic.entity';

export const CustomerEntityType = 'NorthwindModel.Customer';
export interface Customer {
  CustomerID: string;
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
  Orders: Order[];
  CustomerDemographics: CustomerDemographic[];
}
