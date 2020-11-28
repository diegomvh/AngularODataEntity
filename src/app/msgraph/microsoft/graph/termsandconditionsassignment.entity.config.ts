import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TermsAndConditionsAssignment } from './termsandconditionsassignment.entity';
import { TermsAndConditionsAssignmentModel } from './termsandconditionsassignment.model';
import { TermsAndConditionsAssignmentCollection } from './termsandconditionsassignment.collection';
//#endregion

export const TermsAndConditionsAssignmentConfig = {
  name: "termsAndConditionsAssignment",
  base: "microsoft.graph.entity",
  model: TermsAndConditionsAssignmentModel,
  collection: TermsAndConditionsAssignmentCollection,
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as StructuredTypeConfig<TermsAndConditionsAssignment>;