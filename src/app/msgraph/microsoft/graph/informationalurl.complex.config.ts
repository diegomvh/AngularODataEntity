import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { InformationalUrl } from './informationalurl.complex';
import { InformationalUrlModel } from './informationalurl.model';
import { InformationalUrlCollection } from './informationalurl.collection';
//#endregion

export const InformationalUrlConfig = {
  name: "informationalUrl",
  model: InformationalUrlModel,
  collection: InformationalUrlCollection,
  annotations: [],
  fields: {
    logoUrl: {type: 'Edm.String'},
    marketingUrl: {type: 'Edm.String'},
    privacyStatementUrl: {type: 'Edm.String'},
    supportUrl: {type: 'Edm.String'},
    termsOfServiceUrl: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<InformationalUrl>;