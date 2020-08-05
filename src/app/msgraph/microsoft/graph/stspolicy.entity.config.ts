import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { StsPolicy } from './stspolicy.entity';
//#endregion

export const StsPolicyConfig = {
  name: "StsPolicy",
  base: "microsoft.graph.policyBase",
  annotations: [],
  fields: {
    definition: {type: 'Edm.String', nullable: false, collection: true},
    isOrganizationDefault: {type: 'Edm.Boolean'},
    appliesTo: {type: 'graph.directoryObject', collection: true, navigation: true}
  }
} as EntityConfig<StsPolicy>;