import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Invoice } from './invoice.entity';
//#endregion

export const InvoiceConfig = {
  name: "Invoice",
  annotations: [],
  fields: {
    ShipName: {type: 'string', maxLength: 40},
    ShipAddress: {type: 'string', maxLength: 60},
    ShipCity: {type: 'string', maxLength: 15},
    ShipRegion: {type: 'string', maxLength: 15},
    ShipPostalCode: {type: 'string', maxLength: 10},
    ShipCountry: {type: 'string', maxLength: 15},
    CustomerID: {type: 'string', maxLength: 5},
    CustomerName: {type: 'string', key: true, ref: 'CustomerName', nullable: false, maxLength: 40},
    Address: {type: 'string', maxLength: 60},
    City: {type: 'string', maxLength: 15},
    Region: {type: 'string', maxLength: 15},
    PostalCode: {type: 'string', maxLength: 10},
    Country: {type: 'string', maxLength: 15},
    Salesperson: {type: 'string', key: true, ref: 'Salesperson', nullable: false, maxLength: 31},
    OrderID: {type: 'number', key: true, ref: 'OrderID', nullable: false},
    OrderDate: {type: 'Date'},
    RequiredDate: {type: 'Date'},
    ShippedDate: {type: 'Date'},
    ShipperName: {type: 'string', key: true, ref: 'ShipperName', nullable: false, maxLength: 40},
    ProductID: {type: 'number', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'string', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    UnitPrice: {type: 'number', key: true, ref: 'UnitPrice', nullable: false},
    Quantity: {type: 'number', key: true, ref: 'Quantity', nullable: false},
    Discount: {type: 'number', key: true, ref: 'Discount', nullable: false},
    ExtendedPrice: {type: 'number'},
    Freight: {type: 'number'}
  }
} as EntityConfig<Invoice>;