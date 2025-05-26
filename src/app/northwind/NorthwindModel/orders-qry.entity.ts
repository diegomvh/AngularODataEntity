import { Duration } from 'angular-odata';

export const OrdersQryEntityType = 'NorthwindModel.Orders_Qry';
export interface OrdersQry {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
  OrderDate: Date;
  RequiredDate: Date;
  ShippedDate: Date;
  ShipVia: number;
  Freight: number;
  ShipName: string;
  ShipAddress: string;
  ShipCity: string;
  ShipRegion: string;
  ShipPostalCode: string;
  ShipCountry: string;
  CompanyName: string;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
}
