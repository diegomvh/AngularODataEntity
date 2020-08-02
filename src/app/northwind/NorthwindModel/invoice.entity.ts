import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface Invoice {
  //#region ODataApi Properties
  shipName?: string;
  shipAddress?: string;
  shipCity?: string;
  shipRegion?: string;
  shipPostalCode?: string;
  shipCountry?: string;
  customerID?: string;
  customerName: string;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  salesperson: string;
  orderID: number;
  orderDate?: Date;
  requiredDate?: Date;
  shippedDate?: Date;
  shipperName: string;
  productID: number;
  productName: string;
  unitPrice: number;
  quantity: number;
  discount: number;
  extendedPrice?: number;
  freight?: number;
  //#endregion
}