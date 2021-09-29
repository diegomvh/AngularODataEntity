//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Address } from './address.complex';
import { AddressModel } from './address.model';
import { AddressCollection } from './address.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AddressComplexConfig = {
  name: "Address",
  model: AddressModel,
  collection: AddressCollection,
  fields: {
    Street: {type: 'Edm.String'},
    City: {type: 'Edm.String'},
    State: {type: 'Edm.String'},
    ZipCode: {type: 'Edm.String'},
    Country: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Address>;
//#endregion