import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EnrollmentConfigurationAssignment } from './enrollmentconfigurationassignment.entity';
//#endregion

export const EnrollmentConfigurationAssignmentConfig = {
  name: "EnrollmentConfigurationAssignment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<EnrollmentConfigurationAssignment>;