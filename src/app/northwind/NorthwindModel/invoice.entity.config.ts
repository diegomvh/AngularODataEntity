import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Invoice } from './invoice.entity';
import { InvoiceModel } from './invoice.model';
import { InvoiceCollection } from './invoice.collection';
//#endregion

export const InvoiceConfig = {
  name: "Invoice",
  model: InvoiceModel,
  collection: InvoiceCollection,
  annotations: [],
  fields: {
    ShipName: {type: 'Edm.String', maxLength: 40},
    ShipAddress: {type: 'Edm.String', maxLength: 60},
    ShipCity: {type: 'Edm.String', maxLength: 15},
    ShipRegion: {type: 'Edm.String', maxLength: 15},
    ShipPostalCode: {type: 'Edm.String', maxLength: 10},
    ShipCountry: {type: 'Edm.String', maxLength: 15},
    CustomerID: {type: 'Edm.String', maxLength: 5},
    CustomerName: {type: 'Edm.String', key: true, ref: 'CustomerName', nullable: false, maxLength: 40},
    Address: {type: 'Edm.String', maxLength: 60},
    City: {type: 'Edm.String', maxLength: 15},
    Region: {type: 'Edm.String', maxLength: 15},
    PostalCode: {type: 'Edm.String', maxLength: 10},
    Country: {type: 'Edm.String', maxLength: 15},
    Salesperson: {type: 'Edm.String', key: true, ref: 'Salesperson', nullable: false, maxLength: 31},
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    OrderDate: {type: 'Edm.DateTimeOffset'},
    RequiredDate: {type: 'Edm.DateTimeOffset'},
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    ShipperName: {type: 'Edm.String', key: true, ref: 'ShipperName', nullable: false, maxLength: 40},
    ProductID: {type: 'Edm.Int32', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'Edm.String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    UnitPrice: {type: 'Edm.Decimal', key: true, ref: 'UnitPrice', nullable: false, precition: 19, scale: 4},
    Quantity: {type: 'Edm.Int16', key: true, ref: 'Quantity', nullable: false},
    Discount: {type: 'Edm.Single', key: true, ref: 'Discount', nullable: false},
    ExtendedPrice: {type: 'Edm.Decimal', precition: 19, scale: 4},
    Freight: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<Invoice>;