import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicy } from './managedapppolicy.entity';
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
//#endregion

export const ManagedAppPolicyConfig = {
  name: "managedAppPolicy",
  base: "microsoft.graph.entity",
  model: ManagedAppPolicyModel,
  collection: ManagedAppPolicyCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedAppPolicy>;