import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PolicyBase } from './policybase.entity';
//#endregion

export const PolicyBaseConfig = {
  name: "PolicyBase",
  base: "microsoft.graph.directoryObject",
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'}
  }
} as EntityConfig<PolicyBase>;