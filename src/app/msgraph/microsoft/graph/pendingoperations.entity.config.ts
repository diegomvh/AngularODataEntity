import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PendingOperations } from './pendingoperations.entity';
import { PendingOperationsModel } from './pendingoperations.model';
import { PendingOperationsCollection } from './pendingoperations.collection';
//#endregion

export const PendingOperationsConfig = {
  name: "pendingOperations",
  model: PendingOperationsModel,
  collection: PendingOperationsCollection,
  annotations: [],
  fields: {
    pendingContentUpdate: {type: 'graph.pendingContentUpdate'}
  }
} as EntityConfig<PendingOperations>;