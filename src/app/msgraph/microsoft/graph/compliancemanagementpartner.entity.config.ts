import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceManagementPartner } from './compliancemanagementpartner.entity';
//#endregion

export const ComplianceManagementPartnerConfig = {
  name: "complianceManagementPartner",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    lastHeartbeatDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    partnerState: {type: 'graph.deviceManagementPartnerTenantState', nullable: false},
    displayName: {type: 'Edm.String'},
    macOsOnboarded: {type: 'Edm.Boolean', nullable: false},
    androidOnboarded: {type: 'Edm.Boolean', nullable: false},
    iosOnboarded: {type: 'Edm.Boolean', nullable: false},
    macOsEnrollmentAssignments: {type: 'graph.complianceManagementPartnerAssignment', collection: true},
    androidEnrollmentAssignments: {type: 'graph.complianceManagementPartnerAssignment', collection: true},
    iosEnrollmentAssignments: {type: 'graph.complianceManagementPartnerAssignment', collection: true}
  }
} as EntityConfig<ComplianceManagementPartner>;