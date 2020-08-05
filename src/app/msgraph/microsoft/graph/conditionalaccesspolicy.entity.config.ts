import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
//#endregion

export const ConditionalAccessPolicyConfig = {
  name: "ConditionalAccessPolicy",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    modifiedDateTime: {type: 'Edm.DateTimeOffset'},
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    state: {type: 'graph.conditionalAccessPolicyState', nullable: false},
    conditions: {type: 'graph.conditionalAccessConditionSet', nullable: false},
    grantControls: {type: 'graph.conditionalAccessGrantControls'},
    sessionControls: {type: 'graph.conditionalAccessSessionControls'}
  }
} as EntityConfig<ConditionalAccessPolicy>;