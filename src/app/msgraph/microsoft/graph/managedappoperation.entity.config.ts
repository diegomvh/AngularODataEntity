import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppOperation } from './managedappoperation.entity';
import { ManagedAppOperationModel } from './managedappoperation.model';
import { ManagedAppOperationCollection } from './managedappoperation.collection';
//#endregion

export const ManagedAppOperationConfig = {
  name: "managedAppOperation",
  base: "microsoft.graph.entity",
  model: ManagedAppOperationModel,
  collection: ManagedAppOperationCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    state: {type: 'Edm.String'},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedAppOperation>;