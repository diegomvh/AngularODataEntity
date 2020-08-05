import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppAssignment } from './mobileappassignment.entity';
//#endregion

export const MobileAppAssignmentConfig = {
  name: "MobileAppAssignment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    intent: {type: 'graph.installIntent', nullable: false},
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'},
    settings: {type: 'graph.mobileAppAssignmentSettings'}
  }
} as EntityConfig<MobileAppAssignment>;