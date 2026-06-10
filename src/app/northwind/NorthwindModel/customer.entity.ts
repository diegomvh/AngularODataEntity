

import { Order } from './order.entity';
import { CustomerDemographic } from './customer-demographic.entity';

// #region Custom
// #endregion Custom
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
  Orders?: Order[];
  CustomerDemographics?: CustomerDemographic[];
// #region Custom
// #endregion Custom
}
