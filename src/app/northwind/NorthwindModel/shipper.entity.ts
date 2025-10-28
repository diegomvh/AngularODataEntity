import { Duration } from 'angular-odata';

import { Order } from './order.entity';

export const ShipperEntityType = 'NorthwindModel.Shipper';
export interface Shipper {
  ShipperID: number;
  CompanyName: string;
  Phone: string;
  Orders?: Order[];
}
