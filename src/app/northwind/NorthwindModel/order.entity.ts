//#region ODataApi Imports
import { Customer } from './customer.entity';
import { Employee } from './employee.entity';
import { Order_Detail } from './order_detail.entity';
import { Shipper } from './shipper.entity';
//#endregion

export interface Order {
  //#region ODataApi Properties
  OrderID: number;
  CustomerID?: string;
  EmployeeID?: number;
  OrderDate?: Date;
  RequiredDate?: Date;
  ShippedDate?: Date;
  ShipVia?: number;
  Freight?: number;
  ShipName?: string;
  ShipAddress?: string;
  ShipCity?: string;
  ShipRegion?: string;
  ShipPostalCode?: string;
  ShipCountry?: string;
  Customer?: Customer;
  Employee?: Employee;
  Order_Details?: Order_Detail[];
  Shipper?: Shipper;
  //#endregion
}