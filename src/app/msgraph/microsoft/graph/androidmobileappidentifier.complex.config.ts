import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidMobileAppIdentifier } from './androidmobileappidentifier.complex';
import { AndroidMobileAppIdentifierModel } from './androidmobileappidentifier.model';
import { AndroidMobileAppIdentifierCollection } from './androidmobileappidentifier.collection';
//#endregion

export const AndroidMobileAppIdentifierConfig = {
  name: "androidMobileAppIdentifier",
  base: "microsoft.graph.mobileAppIdentifier",
  model: AndroidMobileAppIdentifierModel,
  collection: AndroidMobileAppIdentifierCollection,
  annotations: [],
  fields: {
    packageId: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<AndroidMobileAppIdentifier>;