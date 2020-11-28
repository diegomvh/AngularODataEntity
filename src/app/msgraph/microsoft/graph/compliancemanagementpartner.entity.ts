import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceManagementPartnerTenantState } from './devicemanagementpartnertenantstate.enum';
import { ComplianceManagementPartnerAssignment } from './compliancemanagementpartnerassignment.entity';
import { ComplianceManagementPartnerAssignmentModel } from './compliancemanagementpartnerassignment.model';
import { EntityModel } from './entity.model';
import { ComplianceManagementPartnerAssignmentCollection } from './compliancemanagementpartnerassignment.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ComplianceManagementPartner extends Entity {
  //#region ODataApi Properties
  androidEnrollmentAssignments?: ComplianceManagementPartnerAssignment[];
  androidOnboarded: boolean;
  displayName?: string;
  iosEnrollmentAssignments?: ComplianceManagementPartnerAssignment[];
  iosOnboarded: boolean;
  lastHeartbeatDateTime: Date;
  macOsEnrollmentAssignments?: ComplianceManagementPartnerAssignment[];
  macOsOnboarded: boolean;
  partnerState: DeviceManagementPartnerTenantState;
  //#endregion
}