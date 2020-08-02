import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Supplier } from './supplier.entity';
import { SupplierModel } from './supplier.model';
import { SupplierCollection } from './supplier.collection';
//#endregion

export const SupplierConfig = {
  name: "Supplier",
  model: SupplierModel,
  collection: SupplierCollection,
  annotations: [],
  fields: {
    supplierID: {name: 'SupplierID', type: 'Edm.Int32', key: true, ref: 'supplierID', nullable: false},
    companyName: {name: 'CompanyName', type: 'Edm.String', nullable: false, maxLength: 40},
    contactName: {name: 'ContactName', type: 'Edm.String', maxLength: 30},
    contactTitle: {name: 'ContactTitle', type: 'Edm.String', maxLength: 30},
    address: {name: 'Address', type: 'Edm.String', maxLength: 60},
    city: {name: 'City', type: 'Edm.String', maxLength: 15},
    region: {name: 'Region', type: 'Edm.String', maxLength: 15},
    postalCode: {name: 'PostalCode', type: 'Edm.String', maxLength: 10},
    country: {name: 'Country', type: 'Edm.String', maxLength: 15},
    phone: {name: 'Phone', type: 'Edm.String', maxLength: 24},
    fax: {name: 'Fax', type: 'Edm.String', maxLength: 24},
    homePage: {name: 'HomePage', type: 'Edm.String'},
    products: {name: 'Products', type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as EntityConfig<Supplier>;