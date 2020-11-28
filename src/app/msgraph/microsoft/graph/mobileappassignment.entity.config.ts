import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppAssignment } from './mobileappassignment.entity';
import { MobileAppAssignmentModel } from './mobileappassignment.model';
import { MobileAppAssignmentCollection } from './mobileappassignment.collection';
//#endregion

export const MobileAppAssignmentConfig = {
  name: "mobileAppAssignment",
  base: "microsoft.graph.entity",
  model: MobileAppAssignmentModel,
  collection: MobileAppAssignmentCollection,
  annotations: [],
  fields: {
    intent: {type: 'graph.installIntent', nullable: false},
    settings: {type: 'graph.mobileAppAssignmentSettings'},
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<MobileAppAssignment>;