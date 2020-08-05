import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TermsAndConditionsAssignment } from './termsandconditionsassignment.entity';
//#endregion

export const TermsAndConditionsAssignmentConfig = {
  name: "termsAndConditionsAssignment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<TermsAndConditionsAssignment>;