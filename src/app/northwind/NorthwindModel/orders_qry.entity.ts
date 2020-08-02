import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface OrdersQry {
  //#region ODataApi Properties
  orderID: number;
  customerID?: string;
  employeeID?: number;
  orderDate?: Date;
  requiredDate?: Date;
  shippedDate?: Date;
  shipVia?: number;
  freight?: number;
  shipName?: string;
  shipAddress?: string;
  shipCity?: string;
  shipRegion?: string;
  shipPostalCode?: string;
  shipCountry?: string;
  companyName: string;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  //#endregion
}