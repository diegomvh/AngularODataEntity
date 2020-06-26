import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Invoice } from './invoice.entity';
//#endregion

export const InvoiceConfig = {
  name: "Invoice",
  annotations: [],
  fields: {
    ShipName: {type: 'String', maxLength: 40},
    ShipAddress: {type: 'String', maxLength: 60},
    ShipCity: {type: 'String', maxLength: 15},
    ShipRegion: {type: 'String', maxLength: 15},
    ShipPostalCode: {type: 'String', maxLength: 10},
    ShipCountry: {type: 'String', maxLength: 15},
    CustomerID: {type: 'String', maxLength: 5},
    CustomerName: {type: 'String', key: true, ref: 'CustomerName', nullable: false, maxLength: 40},
    Address: {type: 'String', maxLength: 60},
    City: {type: 'String', maxLength: 15},
    Region: {type: 'String', maxLength: 15},
    PostalCode: {type: 'String', maxLength: 10},
    Country: {type: 'String', maxLength: 15},
    Salesperson: {type: 'String', key: true, ref: 'Salesperson', nullable: false, maxLength: 31},
    OrderID: {type: 'Number', key: true, ref: 'OrderID', nullable: false},
    OrderDate: {type: 'Date'},
    RequiredDate: {type: 'Date'},
    ShippedDate: {type: 'Date'},
    ShipperName: {type: 'String', key: true, ref: 'ShipperName', nullable: false, maxLength: 40},
    ProductID: {type: 'Number', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    UnitPrice: {type: 'Decimal', key: true, ref: 'UnitPrice', nullable: false, precition: 19, scale: 4},
    Quantity: {type: 'Number', key: true, ref: 'Quantity', nullable: false},
    Discount: {type: 'Number', key: true, ref: 'Discount', nullable: false},
    ExtendedPrice: {type: 'Decimal', precition: 19, scale: 4},
    Freight: {type: 'Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<Invoice>;