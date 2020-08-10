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
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    CustomerID: {type: 'Edm.String', maxLength: 5},
    EmployeeID: {type: 'Edm.Int32'},
    OrderDate: {type: 'Edm.DateTimeOffset'},
    RequiredDate: {type: 'Edm.DateTimeOffset'},
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    ShipVia: {type: 'Edm.Int32'},
    Freight: {type: 'Edm.Decimal', precition: 19, scale: 4},
    ShipName: {type: 'Edm.String', maxLength: 40},
    ShipAddress: {type: 'Edm.String', maxLength: 60},
    ShipCity: {type: 'Edm.String', maxLength: 15},
    ShipRegion: {type: 'Edm.String', maxLength: 15},
    ShipPostalCode: {type: 'Edm.String', maxLength: 10},
    ShipCountry: {type: 'Edm.String', maxLength: 15},
    Customer: {type: 'NorthwindModel.Customer', navigation: true, field: 'CustomerID', ref: 'CustomerID'},
    Employee: {type: 'NorthwindModel.Employee', navigation: true, field: 'EmployeeID', ref: 'EmployeeID'},
    Order_Details: {type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    Shipper: {type: 'NorthwindModel.Shipper', navigation: true, field: 'ShipVia', ref: 'ShipperID'}
  }
} as EntityConfig<Order>;