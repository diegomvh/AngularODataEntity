import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosVppEBookAssignment } from './iosvppebookassignment.entity';
//#endregion

export const IosVppEBookAssignmentConfig = {
  name: "iosVppEBookAssignment",
  base: "microsoft.graph.managedEBookAssignment",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<IosVppEBookAssignment>;