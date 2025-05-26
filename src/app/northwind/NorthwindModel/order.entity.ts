import { Duration } from 'angular-odata';
import { Customer } from './customer.entity';
import { Employee } from './employee.entity';
import { OrderDetail } from './order-detail.entity';
import { Shipper } from './shipper.entity';

export const OrderEntityType = 'NorthwindModel.Order';
export interface Order {
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
  Customer: Customer;
  Employee: Employee;
  Order_Details: OrderDetail[];
  Shipper: Shipper;
}
