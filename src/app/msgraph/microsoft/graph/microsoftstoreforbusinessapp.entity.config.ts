import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MicrosoftStoreForBusinessApp } from './microsoftstoreforbusinessapp.entity';
import { MicrosoftStoreForBusinessAppModel } from './microsoftstoreforbusinessapp.model';
import { MicrosoftStoreForBusinessAppCollection } from './microsoftstoreforbusinessapp.collection';
//#endregion

export const MicrosoftStoreForBusinessAppConfig = {
  name: "microsoftStoreForBusinessApp",
  base: "microsoft.graph.mobileApp",
  model: MicrosoftStoreForBusinessAppModel,
  collection: MicrosoftStoreForBusinessAppCollection,
  annotations: [],
  fields: {
    licenseType: {type: 'graph.microsoftStoreForBusinessLicenseType', nullable: false},
    packageIdentityName: {type: 'Edm.String'},
    productKey: {type: 'Edm.String'},
    totalLicenseCount: {type: 'Edm.Int32', nullable: false},
    usedLicenseCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<MicrosoftStoreForBusinessApp>;