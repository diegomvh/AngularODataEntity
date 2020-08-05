import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecurityVendorInformation } from './securityvendorinformation.entity';
//#endregion

export const SecurityVendorInformationConfig = {
  name: "securityVendorInformation",
  annotations: [],
  fields: {
    provider: {type: 'Edm.String'},
    providerVersion: {type: 'Edm.String'},
    subProvider: {type: 'Edm.String'},
    vendor: {type: 'Edm.String'}
  }
} as EntityConfig<SecurityVendorInformation>;