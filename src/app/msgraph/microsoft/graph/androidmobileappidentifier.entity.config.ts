import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidMobileAppIdentifier } from './androidmobileappidentifier.entity';
//#endregion

export const AndroidMobileAppIdentifierConfig = {
  name: "androidMobileAppIdentifier",
  base: "microsoft.graph.mobileAppIdentifier",
  annotations: [],
  fields: {
    packageId: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<AndroidMobileAppIdentifier>;