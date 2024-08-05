//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Invoice } from './invoice.entity';
import { InvoiceModel } from './invoice.model';
import { InvoiceCollection } from './invoice.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const InvoiceEntityConfig = {
  name: 'Invoice',
  model: InvoiceModel,
  collection: InvoiceCollection,
  keys: [{name: 'CustomerName'},{name: 'Discount'},{name: 'OrderID'},{name: 'ProductID'},{name: 'ProductName'},{name: 'Quantity'},{name: 'Salesperson'},{name: 'ShipperName'},{name: 'UnitPrice'}],
  fields: {
    ShipName: {type: 'Edm.String'},
    ShipAddress: {type: 'Edm.String'},
    ShipCity: {type: 'Edm.String'},
    ShipRegion: {type: 'Edm.String'},
    ShipPostalCode: {type: 'Edm.String'},
    ShipCountry: {type: 'Edm.String'},
    CustomerID: {type: 'Edm.String'},
    CustomerName: {type: 'Edm.String', nullable: false},
    Address: {type: 'Edm.String'},
    City: {type: 'Edm.String'},
    Region: {type: 'Edm.String'},
    PostalCode: {type: 'Edm.String'},
    Country: {type: 'Edm.String'},
    Salesperson: {type: 'Edm.String', nullable: false},
    OrderID: {type: 'Edm.Int32', nullable: false},
    OrderDate: {type: 'Edm.DateTimeOffset'},
    RequiredDate: {type: 'Edm.DateTimeOffset'},
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    ShipperName: {type: 'Edm.String', nullable: false},
    ProductID: {type: 'Edm.Int32', nullable: false},
    ProductName: {type: 'Edm.String', nullable: false},
    UnitPrice: {type: 'Edm.Decimal', nullable: false},
    Quantity: {type: 'Edm.Int16', nullable: false},
    Discount: {type: 'Edm.Single', nullable: false},
    ExtendedPrice: {type: 'Edm.Decimal'},
    Freight: {type: 'Edm.Decimal'}
  }
} as StructuredTypeConfig;
//#endregion