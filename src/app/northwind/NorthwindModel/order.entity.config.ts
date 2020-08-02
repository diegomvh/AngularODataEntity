import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';
//#endregion

export const OrderConfig = {
  name: "Order",
  model: OrderModel,
  collection: OrderCollection,
  annotations: [],
  fields: {
    orderID: {name: 'OrderID', type: 'Edm.Int32', key: true, ref: 'orderID', nullable: false},
    customerID: {name: 'CustomerID', type: 'Edm.String', maxLength: 5},
    employeeID: {name: 'EmployeeID', type: 'Edm.Int32'},
    orderDate: {name: 'OrderDate', type: 'Edm.DateTimeOffset'},
    requiredDate: {name: 'RequiredDate', type: 'Edm.DateTimeOffset'},
    shippedDate: {name: 'ShippedDate', type: 'Edm.DateTimeOffset'},
    shipVia: {name: 'ShipVia', type: 'Edm.Int32'},
    freight: {name: 'Freight', type: 'Edm.Decimal', precition: 19, scale: 4},
    shipName: {name: 'ShipName', type: 'Edm.String', maxLength: 40},
    shipAddress: {name: 'ShipAddress', type: 'Edm.String', maxLength: 60},
    shipCity: {name: 'ShipCity', type: 'Edm.String', maxLength: 15},
    shipRegion: {name: 'ShipRegion', type: 'Edm.String', maxLength: 15},
    shipPostalCode: {name: 'ShipPostalCode', type: 'Edm.String', maxLength: 10},
    shipCountry: {name: 'ShipCountry', type: 'Edm.String', maxLength: 15},
    customer: {name: 'Customer', type: 'NorthwindModel.Customer', navigation: true, field: 'CustomerID', ref: 'CustomerID'},
    employee: {name: 'Employee', type: 'NorthwindModel.Employee', navigation: true, field: 'EmployeeID', ref: 'EmployeeID'},
    orderDetails: {name: 'Order_Details', type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    shipper: {name: 'Shipper', type: 'NorthwindModel.Shipper', navigation: true, field: 'ShipVia', ref: 'ShipperID'}
  }
} as EntityConfig<Order>;