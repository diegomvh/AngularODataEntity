import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceManagementPartnerTenantState } from './devicemanagementpartnertenantstate.enum';
import { ComplianceManagementPartnerAssignment } from './compliancemanagementpartnerassignment.entity';
import { ComplianceManagementPartner } from './compliancemanagementpartner.entity';
import { ComplianceManagementPartnerAssignmentModel } from './compliancemanagementpartnerassignment.model';
import { ComplianceManagementPartnerModel } from './compliancemanagementpartner.model';
import { ComplianceManagementPartnerAssignmentCollection } from './compliancemanagementpartnerassignment.collection';
//#endregion

export class ComplianceManagementPartnerCollection<E extends ComplianceManagementPartner, M extends ComplianceManagementPartnerModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}