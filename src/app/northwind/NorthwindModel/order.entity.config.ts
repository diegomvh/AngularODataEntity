import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Order } from './order.entity';
//#endregion

export const OrderConfig = {
  name: "Order",
  annotations: [],
  fields: {
    OrderID: {type: 'Number', key: true, ref: 'OrderID', nullable: false},
    CustomerID: {type: 'String', maxLength: 5},
    EmployeeID: {type: 'Number'},
    OrderDate: {type: 'Date'},
    RequiredDate: {type: 'Date'},
    ShippedDate: {type: 'Date'},
    ShipVia: {type: 'Number'},
    Freight: {type: 'Number', scale: 4},
    ShipName: {type: 'String', maxLength: 40},
    ShipAddress: {type: 'String', maxLength: 60},
    ShipCity: {type: 'String', maxLength: 15},
    ShipRegion: {type: 'String', maxLength: 15},
    ShipPostalCode: {type: 'String', maxLength: 10},
    ShipCountry: {type: 'String', maxLength: 15},
    Customer: {type: 'NorthwindModel.Customer', navigation: true, field: 'CustomerID', ref: 'CustomerID'},
    Employee: {type: 'NorthwindModel.Employee', navigation: true, field: 'EmployeeID', ref: 'EmployeeID'},
    Order_Details: {type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    Shipper: {type: 'NorthwindModel.Shipper', navigation: true, field: 'ShipVia', ref: 'ShipperID'}
  }
} as EntityConfig<Order>;