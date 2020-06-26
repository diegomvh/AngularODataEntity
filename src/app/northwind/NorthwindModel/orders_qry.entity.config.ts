import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Orders_Qry } from './orders_qry.entity';
//#endregion

export const Orders_QryConfig = {
  name: "Orders_Qry",
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
    CompanyName: {type: 'String', key: true, ref: 'CompanyName', nullable: false, maxLength: 40},
    Address: {type: 'String', maxLength: 60},
    City: {type: 'String', maxLength: 15},
    Region: {type: 'String', maxLength: 15},
    PostalCode: {type: 'String', maxLength: 10},
    Country: {type: 'String', maxLength: 15}
  }
} as EntityConfig<Orders_Qry>;