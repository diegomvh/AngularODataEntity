import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceManagementPartnerTenantState } from './devicemanagementpartnertenantstate.enum';
import { ComplianceManagementPartnerAssignment } from './compliancemanagementpartnerassignment.entity';
//#endregion

export interface ComplianceManagementPartner extends Entity {
  //#region ODataApi Properties
  lastHeartbeatDateTime: Date;
  partnerState: DeviceManagementPartnerTenantState;
  displayName?: string;
  macOsOnboarded: boolean;
  androidOnboarded: boolean;
  iosOnboarded: boolean;
  macOsEnrollmentAssignments?: ComplianceManagementPartnerAssignment[];
  androidEnrollmentAssignments?: ComplianceManagementPartnerAssignment[];
  iosEnrollmentAssignments?: ComplianceManagementPartnerAssignment[];
  //#endregion
}