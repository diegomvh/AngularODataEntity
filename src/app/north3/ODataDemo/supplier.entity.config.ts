//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

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
  keys: [{name: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
    Name: {type: 'Edm.String'},
    Address: {type: 'ODataDemo.Address'},
    Location: {type: 'Edm.GeographyPoint', srid: 'Variable'},
    Concurrency: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<Supplier>;
//#endregion