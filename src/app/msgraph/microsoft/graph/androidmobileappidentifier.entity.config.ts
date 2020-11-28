import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidMobileAppIdentifier } from './androidmobileappidentifier.entity';
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
} as EntityConfig<AndroidMobileAppIdentifier>;