import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ComplianceInformation } from './complianceinformation.entity';
import { SecureScoreControlStateUpdate } from './securescorecontrolstateupdate.entity';
import { SecurityVendorInformation } from './securityvendorinformation.entity';
import { SecureScoreControlProfile } from './securescorecontrolprofile.entity';
import { ComplianceInformationModel } from './complianceinformation.model';
import { SecureScoreControlStateUpdateModel } from './securescorecontrolstateupdate.model';
import { SecurityVendorInformationModel } from './securityvendorinformation.model';
import { ComplianceInformationCollection } from './complianceinformation.collection';
import { SecureScoreControlStateUpdateCollection } from './securescorecontrolstateupdate.collection';
import { SecurityVendorInformationCollection } from './securityvendorinformation.collection';
import { SecureScoreControlProfileCollection } from './securescorecontrolprofile.collection';
//#endregion

export class SecureScoreControlProfileModel<E extends SecureScoreControlProfile> extends EntityModel<E> {
  //#region ODataApi Properties
  actionType?: string;
  actionUrl?: string;
  azureTenantId: string;
  complianceInformation?: ComplianceInformationCollection<ComplianceInformation, ComplianceInformationModel<ComplianceInformation>>;
  controlCategory?: string;
  controlStateUpdates?: SecureScoreControlStateUpdateCollection<SecureScoreControlStateUpdate, SecureScoreControlStateUpdateModel<SecureScoreControlStateUpdate>>;
  deprecated?: boolean;
  implementationCost?: string;
  lastModifiedDateTime?: Date;
  maxScore?: number;
  rank?: number;
  remediation?: string;
  remediationImpact?: string;
  service?: string;
  threats?: string[];
  tier?: string;
  title?: string;
  userImpact?: string;
  vendorInformation?: SecurityVendorInformationModel<SecurityVendorInformation>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}