import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedEBookAssignment } from './managedebookassignment.entity';
import { ManagedEBookAssignmentModel } from './managedebookassignment.model';
import { ManagedEBookAssignmentCollection } from './managedebookassignment.collection';
//#endregion

export const ManagedEBookAssignmentConfig = {
  name: "managedEBookAssignment",
  base: "microsoft.graph.entity",
  model: ManagedEBookAssignmentModel,
  collection: ManagedEBookAssignmentCollection,
  annotations: [],
  fields: {
    installIntent: {type: 'graph.installIntent', nullable: false},
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<ManagedEBookAssignment>;