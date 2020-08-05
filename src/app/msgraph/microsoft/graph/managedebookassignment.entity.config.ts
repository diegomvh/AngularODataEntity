import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedEBookAssignment } from './managedebookassignment.entity';
//#endregion

export const ManagedEBookAssignmentConfig = {
  name: "ManagedEBookAssignment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'},
    installIntent: {type: 'graph.installIntent', nullable: false}
  }
} as EntityConfig<ManagedEBookAssignment>;