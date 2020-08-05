import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AccessAction } from './accessaction.entity';
//#endregion

export const AccessActionConfig = {
  name: "accessAction",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<AccessAction>;