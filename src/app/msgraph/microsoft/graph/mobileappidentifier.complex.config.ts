import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppIdentifier } from './mobileappidentifier.complex';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
//#endregion

export const MobileAppIdentifierConfig = {
  name: "mobileAppIdentifier",
  model: MobileAppIdentifierModel,
  collection: MobileAppIdentifierCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<MobileAppIdentifier>;