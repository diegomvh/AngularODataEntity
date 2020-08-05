import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
//#endregion

export const ManagedAppPolicyConfig = {
  name: "ManagedAppPolicy",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedAppPolicy>;