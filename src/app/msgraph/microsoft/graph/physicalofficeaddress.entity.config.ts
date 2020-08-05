import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PhysicalOfficeAddress } from './physicalofficeaddress.entity';
//#endregion

export const PhysicalOfficeAddressConfig = {
  name: "physicalOfficeAddress",
  annotations: [],
  fields: {
    city: {type: 'Edm.String'},
    countryOrRegion: {type: 'Edm.String'},
    officeLocation: {type: 'Edm.String'},
    postalCode: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    street: {type: 'Edm.String'}
  }
} as EntityConfig<PhysicalOfficeAddress>;