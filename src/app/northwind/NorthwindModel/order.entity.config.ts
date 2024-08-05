//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Order } from './order.entity';
import { OrderModel } from './order.model';
import { OrderCollection } from './order.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OrderEntityConfig = {
  name: 'Order',
  model: OrderModel,
  collection: OrderCollection,
  keys: [{name: 'OrderID'}],
  fields: {
    OrderID: {type: 'Edm.Int32', nullable: false},
    CustomerID: {type: 'Edm.String'},
    EmployeeID: {type: 'Edm.Int32'},
    OrderDate: {type: 'Edm.DateTimeOffset'},
    RequiredDate: {type: 'Edm.DateTimeOffset'},
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    ShipVia: {type: 'Edm.Int32'},
    Freight: {type: 'Edm.Decimal'},
    ShipName: {type: 'Edm.String'},
    ShipAddress: {type: 'Edm.String'},
    ShipCity: {type: 'Edm.String'},
    ShipRegion: {type: 'Edm.String'},
    ShipPostalCode: {type: 'Edm.String'},
    ShipCountry: {type: 'Edm.String'},
    Customer: {type: 'NorthwindModel.Customer', navigation: true},
    Employee: {type: 'NorthwindModel.Employee', navigation: true},
    Order_Details: {type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    Shipper: {type: 'NorthwindModel.Shipper', navigation: true}
  }
} as StructuredTypeConfig;
//#endregion