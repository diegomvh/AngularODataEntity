import { Duration } from 'angular-odata';
import { Customer } from './customer.entity';

export const CustomerDemographicEntityType = 'NorthwindModel.CustomerDemographic';
export interface CustomerDemographic {
  CustomerTypeID: string;
  CustomerDesc: string;
  Customers: Customer[];
}
