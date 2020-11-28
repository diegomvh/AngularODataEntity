import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceManagementPartner } from './compliancemanagementpartner.entity';
import { ComplianceManagementPartnerModel } from './compliancemanagementpartner.model';
import { ComplianceManagementPartnerCollection } from './compliancemanagementpartner.collection';
//#endregion

export const ComplianceManagementPartnerConfig = {
  name: "complianceManagementPartner",
  base: "microsoft.graph.entity",
  model: ComplianceManagementPartnerModel,
  collection: ComplianceManagementPartnerCollection,
  annotations: [],
  fields: {
    androidEnrollmentAssignments: {type: 'graph.complianceManagementPartnerAssignment', collection: true},
    androidOnboarded: {type: 'Edm.Boolean', nullable: false},
    displayName: {type: 'Edm.String'},
    iosEnrollmentAssignments: {type: 'graph.complianceManagementPartnerAssignment', collection: true},
    iosOnboarded: {type: 'Edm.Boolean', nullable: false},
    lastHeartbeatDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    macOsEnrollmentAssignments: {type: 'graph.complianceManagementPartnerAssignment', collection: true},
    macOsOnboarded: {type: 'Edm.Boolean', nullable: false},
    partnerState: {type: 'graph.deviceManagementPartnerTenantState', nullable: false}
  }
} as EntityConfig<ComplianceManagementPartner>;