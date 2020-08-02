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
  customer?: Customer;
  employee?: Employee;
  orderDetails?: Order_Detail[];
  shipper?: Shipper;
  //#endregion
}