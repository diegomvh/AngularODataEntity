import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppliedConditionalAccessPolicy } from './appliedconditionalaccesspolicy.entity';
import { AppliedConditionalAccessPolicyModel } from './appliedconditionalaccesspolicy.model';
import { AppliedConditionalAccessPolicyCollection } from './appliedconditionalaccesspolicy.collection';
//#endregion

export const AppliedConditionalAccessPolicyConfig = {
  name: "appliedConditionalAccessPolicy",
  model: AppliedConditionalAccessPolicyModel,
  collection: AppliedConditionalAccessPolicyCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    enforcedGrantControls: {type: 'Edm.String', collection: true},
    enforcedSessionControls: {type: 'Edm.String', collection: true},
    id: {type: 'Edm.String'},
    result: {type: 'graph.appliedConditionalAccessPolicyResult'}
  }
} as EntityConfig<AppliedConditionalAccessPolicy>;