import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Supplier } from './supplier.entity';
//#endregion

export const SupplierConfig = {
  name: "Supplier",
  annotations: [],
  fields: {
    ID: {type: 'Edm.Int32', key: true, ref: 'ID', nullable: false},
    Name: {type: 'Edm.String'},
    Address: {type: 'ODataDemo.Address', nullable: false},
    Concurrency: {type: 'Edm.Int32', nullable: false},
    Products: {type: 'ODataDemo.Product', collection: true, navigation: true}
  }
} as EntityConfig<Supplier>;