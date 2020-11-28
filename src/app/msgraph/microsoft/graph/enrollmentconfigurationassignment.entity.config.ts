import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EnrollmentConfigurationAssignment } from './enrollmentconfigurationassignment.entity';
import { EnrollmentConfigurationAssignmentModel } from './enrollmentconfigurationassignment.model';
import { EnrollmentConfigurationAssignmentCollection } from './enrollmentconfigurationassignment.collection';
//#endregion

export const EnrollmentConfigurationAssignmentConfig = {
  name: "enrollmentConfigurationAssignment",
  base: "microsoft.graph.entity",
  model: EnrollmentConfigurationAssignmentModel,
  collection: EnrollmentConfigurationAssignmentCollection,
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as StructuredTypeConfig<EnrollmentConfigurationAssignment>;