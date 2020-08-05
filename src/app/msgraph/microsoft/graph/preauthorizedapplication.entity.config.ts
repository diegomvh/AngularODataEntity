import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PreAuthorizedApplication } from './preauthorizedapplication.entity';
//#endregion

export const PreAuthorizedApplicationConfig = {
  name: "PreAuthorizedApplication",
  annotations: [],
  fields: {
    appId: {type: 'Edm.String'},
    delegatedPermissionIds: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<PreAuthorizedApplication>;