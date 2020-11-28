import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceManagementPartnerTenantState } from './devicemanagementpartnertenantstate.enum';
import { ComplianceManagementPartnerAssignment } from './compliancemanagementpartnerassignment.entity';
import { ComplianceManagementPartner } from './compliancemanagementpartner.entity';
import { ComplianceManagementPartnerAssignmentModel } from './compliancemanagementpartnerassignment.model';
import { ComplianceManagementPartnerAssignmentCollection } from './compliancemanagementpartnerassignment.collection';
import { ComplianceManagementPartnerCollection } from './compliancemanagementpartner.collection';
//#endregion

export class ComplianceManagementPartnerModel<E extends ComplianceManagementPartner> extends EntityModel<E> {
  //#region ODataApi Properties
  androidEnrollmentAssignments?: ComplianceManagementPartnerAssignmentCollection<ComplianceManagementPartnerAssignment, ComplianceManagementPartnerAssignmentModel<ComplianceManagementPartnerAssignment>>;
  androidOnboarded: boolean;
  displayName?: string;
  iosEnrollmentAssignments?: ComplianceManagementPartnerAssignmentCollection<ComplianceManagementPartnerAssignment, ComplianceManagementPartnerAssignmentModel<ComplianceManagementPartnerAssignment>>;
  iosOnboarded: boolean;
  lastHeartbeatDateTime: Date;
  macOsEnrollmentAssignments?: ComplianceManagementPartnerAssignmentCollection<ComplianceManagementPartnerAssignment, ComplianceManagementPartnerAssignmentModel<ComplianceManagementPartnerAssignment>>;
  macOsOnboarded: boolean;
  partnerState: DeviceManagementPartnerTenantState;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}