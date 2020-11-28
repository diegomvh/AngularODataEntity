import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RequiredResourceAccess } from './requiredresourceaccess.complex';
import { RequiredResourceAccessModel } from './requiredresourceaccess.model';
import { RequiredResourceAccessCollection } from './requiredresourceaccess.collection';
//#endregion

export const RequiredResourceAccessConfig = {
  name: "requiredResourceAccess",
  model: RequiredResourceAccessModel,
  collection: RequiredResourceAccessCollection,
  annotations: [],
  fields: {
    resourceAccess: {type: 'graph.resourceAccess', nullable: false, collection: true},
    resourceAppId: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<RequiredResourceAccess>;