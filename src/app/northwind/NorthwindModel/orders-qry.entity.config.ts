//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrdersQry } from './orders-qry.entity';
import { OrdersQryModel } from './orders-qry.model';
import { OrdersQryCollection } from './orders-qry.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const OrdersQryEntityConfig = {
  name: 'Orders_Qry',
  model: OrdersQryModel,
  collection: OrdersQryCollection,
  keys: [{name: 'CompanyName'},{name: 'OrderID'}],
  fields: {
    OrderID: {type: 'Edm.Int32', nullable: false},
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
    CompanyName: {type: 'Edm.String', nullable: false, maxLength: 40},
    Address: {type: 'Edm.String', maxLength: 60},
    City: {type: 'Edm.String', maxLength: 15},
    Region: {type: 'Edm.String', maxLength: 15},
    PostalCode: {type: 'Edm.String', maxLength: 10},
    Country: {type: 'Edm.String', maxLength: 15}
  }
} as StructuredTypeConfig<OrdersQry>;
//#endregion