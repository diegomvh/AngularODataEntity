

import { Customer } from './customer.entity';

// #region Custom
// #endregion Custom
export const CustomerDemographicEntityType = 'NorthwindModel.CustomerDemographic';
export interface CustomerDemographic {
  CustomerTypeID: string;
  CustomerDesc: string;
  Customers?: Customer[];
// #region Custom
// #endregion Custom
}
