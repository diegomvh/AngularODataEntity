import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PrivacyProfile } from './privacyprofile.entity';
//#endregion

export const PrivacyProfileConfig = {
  name: "PrivacyProfile",
  annotations: [],
  fields: {
    contactEmail: {type: 'Edm.String'},
    statementUrl: {type: 'Edm.String'}
  }
} as EntityConfig<PrivacyProfile>;