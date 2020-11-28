import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PhysicalAddress } from './physicaladdress.entity';
import { PhysicalAddressModel } from './physicaladdress.model';
import { PhysicalAddressCollection } from './physicaladdress.collection';
//#endregion

export const PhysicalAddressConfig = {
  name: "physicalAddress",
  model: PhysicalAddressModel,
  collection: PhysicalAddressCollection,
  annotations: [],
  fields: {
    city: {type: 'Edm.String'},
    countryOrRegion: {type: 'Edm.String'},
    postalCode: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    street: {type: 'Edm.String'}
  }
} as EntityConfig<PhysicalAddress>;