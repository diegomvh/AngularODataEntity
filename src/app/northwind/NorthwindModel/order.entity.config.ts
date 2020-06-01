import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Order } from './order.entity';
//#endregion

export const OrderConfig = {
  name: "Order",
  annotations: [],
  fields: {
    OrderID: {type: 'number', key: true, ref: 'OrderID', nullable: false},
    CustomerID: {type: 'string', maxLength: 5},
    EmployeeID: {type: 'number'},
    OrderDate: {type: 'Date'},
    RequiredDate: {type: 'Date'},
    ShippedDate: {type: 'Date'},
    ShipVia: {type: 'number'},
    Freight: {type: 'number'},
    ShipName: {type: 'string', maxLength: 40},
    ShipAddress: {type: 'string', maxLength: 60},
    ShipCity: {type: 'string', maxLength: 15},
    ShipRegion: {type: 'string', maxLength: 15},
    ShipPostalCode: {type: 'string', maxLength: 10},
    ShipCountry: {type: 'string', maxLength: 15},
    Customer: {type: 'NorthwindModel.Customer', navigation: true, field: 'CustomerID', ref: 'CustomerID'},
    Employee: {type: 'NorthwindModel.Employee', navigation: true, field: 'EmployeeID', ref: 'EmployeeID'},
    Order_Details: {type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    Shipper: {type: 'NorthwindModel.Shipper', navigation: true, field: 'ShipVia', ref: 'ShipperID'}
  }
} as EntityConfig<Order>;