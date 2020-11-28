import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessPolicy } from './conditionalaccesspolicy.entity';
import { ConditionalAccessPolicyModel } from './conditionalaccesspolicy.model';
import { ConditionalAccessPolicyCollection } from './conditionalaccesspolicy.collection';
//#endregion

export const ConditionalAccessPolicyConfig = {
  name: "conditionalAccessPolicy",
  base: "microsoft.graph.entity",
  model: ConditionalAccessPolicyModel,
  collection: ConditionalAccessPolicyCollection,
  annotations: [],
  fields: {
    conditions: {type: 'graph.conditionalAccessConditionSet', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    grantControls: {type: 'graph.conditionalAccessGrantControls'},
    modifiedDateTime: {type: 'Edm.DateTimeOffset'},
    sessionControls: {type: 'graph.conditionalAccessSessionControls'},
    state: {type: 'graph.conditionalAccessPolicyState', nullable: false}
  }
} as EntityConfig<ConditionalAccessPolicy>;