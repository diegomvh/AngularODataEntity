import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InformationalUrl } from './informationalurl.entity';
//#endregion

export const InformationalUrlConfig = {
  name: "informationalUrl",
  annotations: [],
  fields: {
    logoUrl: {type: 'Edm.String'},
    marketingUrl: {type: 'Edm.String'},
    privacyStatementUrl: {type: 'Edm.String'},
    supportUrl: {type: 'Edm.String'},
    termsOfServiceUrl: {type: 'Edm.String'}
  }
} as EntityConfig<InformationalUrl>;