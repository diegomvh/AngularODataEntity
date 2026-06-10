

import { Order } from './order.entity';

// #region Custom
// #endregion Custom
export const ShipperEntityType = 'NorthwindModel.Shipper';
export interface Shipper {
  ShipperID: number;
  CompanyName: string;
  Phone: string;
  Orders?: Order[];
// #region Custom
// #endregion Custom
}
