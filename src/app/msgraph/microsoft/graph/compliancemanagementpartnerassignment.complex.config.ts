import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceManagementPartnerAssignment } from './compliancemanagementpartnerassignment.complex';
import { ComplianceManagementPartnerAssignmentModel } from './compliancemanagementpartnerassignment.model';
import { ComplianceManagementPartnerAssignmentCollection } from './compliancemanagementpartnerassignment.collection';
//#endregion

export const ComplianceManagementPartnerAssignmentConfig = {
  name: "complianceManagementPartnerAssignment",
  model: ComplianceManagementPartnerAssignmentModel,
  collection: ComplianceManagementPartnerAssignmentCollection,
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as StructuredTypeConfig<ComplianceManagementPartnerAssignment>;