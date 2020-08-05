import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceManagementPartnerAssignment } from './compliancemanagementpartnerassignment.entity';
//#endregion

export const ComplianceManagementPartnerAssignmentConfig = {
  name: "ComplianceManagementPartnerAssignment",
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<ComplianceManagementPartnerAssignment>;