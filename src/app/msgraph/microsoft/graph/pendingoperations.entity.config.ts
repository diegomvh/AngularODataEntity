import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PendingOperations } from './pendingoperations.entity';
//#endregion

export const PendingOperationsConfig = {
  name: "PendingOperations",
  annotations: [],
  fields: {
    pendingContentUpdate: {type: 'graph.pendingContentUpdate'}
  }
} as EntityConfig<PendingOperations>;