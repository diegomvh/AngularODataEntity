import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppliedConditionalAccessPolicy } from './appliedconditionalaccesspolicy.entity';
//#endregion

export const AppliedConditionalAccessPolicyConfig = {
  name: "AppliedConditionalAccessPolicy",
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    enforcedGrantControls: {type: 'Edm.String', collection: true},
    enforcedSessionControls: {type: 'Edm.String', collection: true},
    result: {type: 'graph.appliedConditionalAccessPolicyResult'}
  }
} as EntityConfig<AppliedConditionalAccessPolicy>;