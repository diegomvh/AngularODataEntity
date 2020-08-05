import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosMobileAppIdentifier } from './iosmobileappidentifier.entity';
//#endregion

export const IosMobileAppIdentifierConfig = {
  name: "iosMobileAppIdentifier",
  base: "microsoft.graph.mobileAppIdentifier",
  annotations: [],
  fields: {
    bundleId: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<IosMobileAppIdentifier>;