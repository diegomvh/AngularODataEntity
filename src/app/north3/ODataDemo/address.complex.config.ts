import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Address } from './address.complex';
import { AddressModel } from './address.model';
import { AddressCollection } from './address.collection';
//#endregion

export const AddressConfig = {
  name: "Address",
  model: AddressModel,
  collection: AddressCollection,
  annotations: [],
  fields: {
    Street: {type: 'Edm.String'},
    City: {type: 'Edm.String'},
    State: {type: 'Edm.String'},
    ZipCode: {type: 'Edm.String'},
    Country: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Address>;