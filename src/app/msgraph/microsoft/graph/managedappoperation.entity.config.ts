import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppOperation } from './managedappoperation.entity';
//#endregion

export const ManagedAppOperationConfig = {
  name: "ManagedAppOperation",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    state: {type: 'Edm.String'},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedAppOperation>;