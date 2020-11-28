import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScopedRoleMembership } from './scopedrolemembership.entity';
import { ScopedRoleMembershipModel } from './scopedrolemembership.model';
import { ScopedRoleMembershipCollection } from './scopedrolemembership.collection';
//#endregion

export const ScopedRoleMembershipConfig = {
  name: "scopedRoleMembership",
  base: "microsoft.graph.entity",
  model: ScopedRoleMembershipModel,
  collection: ScopedRoleMembershipCollection,
  annotations: [],
  fields: {
    administrativeUnitId: {type: 'Edm.String', nullable: false},
    roleId: {type: 'Edm.String', nullable: false},
    roleMemberInfo: {type: 'graph.identity', nullable: false}
  }
} as StructuredTypeConfig<ScopedRoleMembership>;