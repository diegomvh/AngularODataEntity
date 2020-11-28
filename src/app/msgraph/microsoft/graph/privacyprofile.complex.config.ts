import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PrivacyProfile } from './privacyprofile.complex';
import { PrivacyProfileModel } from './privacyprofile.model';
import { PrivacyProfileCollection } from './privacyprofile.collection';
//#endregion

export const PrivacyProfileConfig = {
  name: "privacyProfile",
  model: PrivacyProfileModel,
  collection: PrivacyProfileCollection,
  annotations: [],
  fields: {
    contactEmail: {type: 'Edm.String'},
    statementUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PrivacyProfile>;