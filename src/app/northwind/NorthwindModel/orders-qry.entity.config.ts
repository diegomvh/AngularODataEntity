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
    CompanyName: {type: 'Edm.String', nullable: false},
    Address: {type: 'Edm.String'},
    City: {type: 'Edm.String'},
    Region: {type: 'Edm.String'},
    PostalCode: {type: 'Edm.String'},
    Country: {type: 'Edm.String'}
  }
} as StructuredTypeConfig;
//#endregion