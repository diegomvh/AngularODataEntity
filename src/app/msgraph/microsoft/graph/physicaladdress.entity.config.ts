import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PhysicalAddress } from './physicaladdress.entity';
//#endregion

export const PhysicalAddressConfig = {
  name: "PhysicalAddress",
  annotations: [],
  fields: {
    street: {type: 'Edm.String'},
    city: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    countryOrRegion: {type: 'Edm.String'},
    postalCode: {type: 'Edm.String'}
  }
} as EntityConfig<PhysicalAddress>;