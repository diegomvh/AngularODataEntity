import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PhysicalOfficeAddress } from './physicalofficeaddress.complex';
import { PhysicalOfficeAddressModel } from './physicalofficeaddress.model';
import { PhysicalOfficeAddressCollection } from './physicalofficeaddress.collection';
//#endregion

export const PhysicalOfficeAddressConfig = {
  name: "physicalOfficeAddress",
  model: PhysicalOfficeAddressModel,
  collection: PhysicalOfficeAddressCollection,
  annotations: [],
  fields: {
    city: {type: 'Edm.String'},
    countryOrRegion: {type: 'Edm.String'},
    officeLocation: {type: 'Edm.String'},
    postalCode: {type: 'Edm.String'},
    state: {type: 'Edm.String'},
    street: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PhysicalOfficeAddress>;