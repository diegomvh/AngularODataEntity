import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrdersQry } from './orders_qry.entity';
import { OrdersQryModel } from './orders_qry.model';
import { OrdersQryCollection } from './orders_qry.collection';
//#endregion

export const OrdersQryConfig = {
  name: "Orders_Qry",
  model: OrdersQryModel,
  collection: OrdersQryCollection,
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
    CompanyName: {type: 'Edm.String', key: true, ref: 'CompanyName', nullable: false, maxLength: 40},
    Address: {type: 'Edm.String', maxLength: 60},
    City: {type: 'Edm.String', maxLength: 15},
    Region: {type: 'Edm.String', maxLength: 15},
    PostalCode: {type: 'Edm.String', maxLength: 10},
    Country: {type: 'Edm.String', maxLength: 15}
  }
} as EntityConfig<OrdersQry>;