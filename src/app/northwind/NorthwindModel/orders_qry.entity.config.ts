import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrdersQry } from './orders_qry.entity';
import { OrdersQryModel } from './orders_qry.model';
import { OrdersQryCollection } from './orders_qry.collection';
//#endregion

export const OrdersQryConfig = {
  name: "OrdersQry",
  model: OrdersQryModel,
  collection: OrdersQryCollection,
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
    companyName: {name: 'CompanyName', type: 'Edm.String', key: true, ref: 'companyName', nullable: false, maxLength: 40},
    address: {name: 'Address', type: 'Edm.String', maxLength: 60},
    city: {name: 'City', type: 'Edm.String', maxLength: 15},
    region: {name: 'Region', type: 'Edm.String', maxLength: 15},
    postalCode: {name: 'PostalCode', type: 'Edm.String', maxLength: 10},
    country: {name: 'Country', type: 'Edm.String', maxLength: 15}
  }
} as EntityConfig<OrdersQry>;