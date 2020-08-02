﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CustomerAndSuppliersByCity } from './customer_and_suppliers_by_city.entity';
import { CustomerAndSuppliersByCityModel } from './customer_and_suppliers_by_city.model';
import { CustomerAndSuppliersByCityCollection } from './customer_and_suppliers_by_city.collection';
//#endregion

export const CustomerAndSuppliersByCityConfig = {
  name: "CustomerAndSuppliersByCity",
  model: CustomerAndSuppliersByCityModel,
  collection: CustomerAndSuppliersByCityCollection,
  annotations: [],
  fields: {
    city: {name: 'City', type: 'Edm.String', maxLength: 15},
    companyName: {name: 'CompanyName', type: 'Edm.String', key: true, ref: 'companyName', nullable: false, maxLength: 40},
    contactName: {name: 'ContactName', type: 'Edm.String', maxLength: 30},
    relationship: {name: 'Relationship', type: 'Edm.String', key: true, ref: 'relationship', nullable: false, maxLength: 9}
  }
} as EntityConfig<CustomerAndSuppliersByCity>;