import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Customer } from './customer.entity';
import { Employee } from './employee.entity';
import { OrderDetail } from './order_detail.entity';
import { Shipper } from './shipper.entity';
import { CustomerModel } from './customer.model';
import { EmployeeModel } from './employee.model';
import { OrderDetailModel } from './order_detail.model';
import { ShipperModel } from './shipper.model';
import { CustomerCollection } from './customer.collection';
import { EmployeeCollection } from './employee.collection';
import { OrderDetailCollection } from './order_detail.collection';
import { ShipperCollection } from './shipper.collection';
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
  Order_Details?: OrderDetail[];
  Shipper?: Shipper;
  //#endregion
}