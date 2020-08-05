import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PendingContentUpdate } from './pendingcontentupdate.entity';
//#endregion

export const PendingContentUpdateConfig = {
  name: "pendingContentUpdate",
  annotations: [],
  fields: {
    queuedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<PendingContentUpdate>;