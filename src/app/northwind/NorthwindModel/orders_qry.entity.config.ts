import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Orders_Qry } from './orders_qry.entity';
//#endregion

export const Orders_QryConfig = {
  name: "Orders_Qry",
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
    CompanyName: {type: 'string', key: true, ref: 'CompanyName', nullable: false, maxLength: 40},
    Address: {type: 'string', maxLength: 60},
    City: {type: 'string', maxLength: 15},
    Region: {type: 'string', maxLength: 15},
    PostalCode: {type: 'string', maxLength: 10},
    Country: {type: 'string', maxLength: 15}
  }
} as EntityConfig<Orders_Qry>;