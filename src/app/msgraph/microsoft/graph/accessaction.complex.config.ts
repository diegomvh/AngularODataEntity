import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AccessAction } from './accessaction.complex';
import { AccessActionModel } from './accessaction.model';
import { AccessActionCollection } from './accessaction.collection';
//#endregion

export const AccessActionConfig = {
  name: "accessAction",
  open: true,
  model: AccessActionModel,
  collection: AccessActionCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<AccessAction>;