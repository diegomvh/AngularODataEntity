import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PendingOperations } from './pendingoperations.entity';
//#endregion

export const PendingOperationsConfig = {
  name: "pendingOperations",
  annotations: [],
  fields: {
    pendingContentUpdate: {type: 'graph.pendingContentUpdate'}
  }
} as EntityConfig<PendingOperations>;