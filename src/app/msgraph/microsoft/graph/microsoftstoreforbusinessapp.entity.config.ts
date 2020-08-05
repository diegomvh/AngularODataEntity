import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MicrosoftStoreForBusinessApp } from './microsoftstoreforbusinessapp.entity';
//#endregion

export const MicrosoftStoreForBusinessAppConfig = {
  name: "MicrosoftStoreForBusinessApp",
  base: "microsoft.graph.mobileApp",
  annotations: [],
  fields: {
    usedLicenseCount: {type: 'Edm.Int32', nullable: false},
    totalLicenseCount: {type: 'Edm.Int32', nullable: false},
    productKey: {type: 'Edm.String'},
    licenseType: {type: 'graph.microsoftStoreForBusinessLicenseType', nullable: false},
    packageIdentityName: {type: 'Edm.String'}
  }
} as EntityConfig<MicrosoftStoreForBusinessApp>;