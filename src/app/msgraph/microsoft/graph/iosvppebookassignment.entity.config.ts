import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosVppEBookAssignment } from './iosvppebookassignment.entity';
import { IosVppEBookAssignmentModel } from './iosvppebookassignment.model';
import { IosVppEBookAssignmentCollection } from './iosvppebookassignment.collection';
//#endregion

export const IosVppEBookAssignmentConfig = {
  name: "iosVppEBookAssignment",
  base: "microsoft.graph.managedEBookAssignment",
  model: IosVppEBookAssignmentModel,
  collection: IosVppEBookAssignmentCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<IosVppEBookAssignment>;