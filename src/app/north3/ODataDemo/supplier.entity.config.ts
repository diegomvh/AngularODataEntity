﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Supplier } from './supplier.entity';
import { SupplierModel } from './supplier.model';
import { SupplierCollection } from './supplier.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const SupplierEntityConfig = {
  name: "Supplier",
  model: SupplierModel,
  collection: SupplierCollection,
  keys: [{ref: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
    Name: {type: 'Edm.String'},
    Address: {type: 'ODataDemo.Address'},
    Location: {type: 'Edm.GeographyPoint', srid: 'Variable'},
    Concurrency: {type: 'Edm.Int32', nullable: false},
    Products: {type: 'ODataDemo.Product', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Supplier>;
//#endregion