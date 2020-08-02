import { EntityConfig } from 'angular-odata';

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
    shipName: {name: 'ShipName', type: 'Edm.String', maxLength: 40},
    shipAddress: {name: 'ShipAddress', type: 'Edm.String', maxLength: 60},
    shipCity: {name: 'ShipCity', type: 'Edm.String', maxLength: 15},
    shipRegion: {name: 'ShipRegion', type: 'Edm.String', maxLength: 15},
    shipPostalCode: {name: 'ShipPostalCode', type: 'Edm.String', maxLength: 10},
    shipCountry: {name: 'ShipCountry', type: 'Edm.String', maxLength: 15},
    customerID: {name: 'CustomerID', type: 'Edm.String', maxLength: 5},
    customerName: {name: 'CustomerName', type: 'Edm.String', key: true, ref: 'customerName', nullable: false, maxLength: 40},
    address: {name: 'Address', type: 'Edm.String', maxLength: 60},
    city: {name: 'City', type: 'Edm.String', maxLength: 15},
    region: {name: 'Region', type: 'Edm.String', maxLength: 15},
    postalCode: {name: 'PostalCode', type: 'Edm.String', maxLength: 10},
    country: {name: 'Country', type: 'Edm.String', maxLength: 15},
    salesperson: {name: 'Salesperson', type: 'Edm.String', key: true, ref: 'salesperson', nullable: false, maxLength: 31},
    orderID: {name: 'OrderID', type: 'Edm.Int32', key: true, ref: 'orderID', nullable: false},
    orderDate: {name: 'OrderDate', type: 'Edm.DateTimeOffset'},
    requiredDate: {name: 'RequiredDate', type: 'Edm.DateTimeOffset'},
    shippedDate: {name: 'ShippedDate', type: 'Edm.DateTimeOffset'},
    shipperName: {name: 'ShipperName', type: 'Edm.String', key: true, ref: 'shipperName', nullable: false, maxLength: 40},
    productID: {name: 'ProductID', type: 'Edm.Int32', key: true, ref: 'productID', nullable: false},
    productName: {name: 'ProductName', type: 'Edm.String', key: true, ref: 'productName', nullable: false, maxLength: 40},
    unitPrice: {name: 'UnitPrice', type: 'Edm.Decimal', key: true, ref: 'unitPrice', nullable: false, precition: 19, scale: 4},
    quantity: {name: 'Quantity', type: 'Edm.Int16', key: true, ref: 'quantity', nullable: false},
    discount: {name: 'Discount', type: 'Edm.Single', key: true, ref: 'discount', nullable: false},
    extendedPrice: {name: 'ExtendedPrice', type: 'Edm.Decimal', precition: 19, scale: 4},
    freight: {name: 'Freight', type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<Invoice>;