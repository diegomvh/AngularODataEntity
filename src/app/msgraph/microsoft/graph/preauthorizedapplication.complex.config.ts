import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PreAuthorizedApplication } from './preauthorizedapplication.complex';
import { PreAuthorizedApplicationModel } from './preauthorizedapplication.model';
import { PreAuthorizedApplicationCollection } from './preauthorizedapplication.collection';
//#endregion

export const PreAuthorizedApplicationConfig = {
  name: "preAuthorizedApplication",
  model: PreAuthorizedApplicationModel,
  collection: PreAuthorizedApplicationCollection,
  annotations: [],
  fields: {
    appId: {type: 'Edm.String'},
    delegatedPermissionIds: {type: 'Edm.String', nullable: false, collection: true}
  }
} as StructuredTypeConfig<PreAuthorizedApplication>;