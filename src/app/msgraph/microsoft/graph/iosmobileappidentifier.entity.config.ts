import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosMobileAppIdentifier } from './iosmobileappidentifier.entity';
import { IosMobileAppIdentifierModel } from './iosmobileappidentifier.model';
import { IosMobileAppIdentifierCollection } from './iosmobileappidentifier.collection';
//#endregion

export const IosMobileAppIdentifierConfig = {
  name: "iosMobileAppIdentifier",
  base: "microsoft.graph.mobileAppIdentifier",
  model: IosMobileAppIdentifierModel,
  collection: IosMobileAppIdentifierCollection,
  annotations: [],
  fields: {
    bundleId: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<IosMobileAppIdentifier>;