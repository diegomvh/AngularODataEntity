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
    ShipName: {type: 'Edm.String', maxLength: 40},
    ShipAddress: {type: 'Edm.String', maxLength: 60},
    ShipCity: {type: 'Edm.String', maxLength: 15},
    ShipRegion: {type: 'Edm.String', maxLength: 15},
    ShipPostalCode: {type: 'Edm.String', maxLength: 10},
    ShipCountry: {type: 'Edm.String', maxLength: 15},
    CustomerID: {type: 'Edm.String', maxLength: 5},
    CustomerName: {type: 'Edm.String', nullable: false, maxLength: 40},
    Address: {type: 'Edm.String', maxLength: 60},
    City: {type: 'Edm.String', maxLength: 15},
    Region: {type: 'Edm.String', maxLength: 15},
    PostalCode: {type: 'Edm.String', maxLength: 10},
    Country: {type: 'Edm.String', maxLength: 15},
    Salesperson: {type: 'Edm.String', nullable: false, maxLength: 31},
    OrderID: {type: 'Edm.Int32', nullable: false},
    OrderDate: {type: 'Edm.DateTimeOffset'},
    RequiredDate: {type: 'Edm.DateTimeOffset'},
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    ShipperName: {type: 'Edm.String', nullable: false, maxLength: 40},
    ProductID: {type: 'Edm.Int32', nullable: false},
    ProductName: {type: 'Edm.String', nullable: false, maxLength: 40},
    UnitPrice: {type: 'Edm.Decimal', nullable: false, precition: 19, scale: 4},
    Quantity: {type: 'Edm.Int16', nullable: false},
    Discount: {type: 'Edm.Single', nullable: false},
    ExtendedPrice: {type: 'Edm.Decimal', precition: 19, scale: 4},
    Freight: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<Invoice>;
//#endregion