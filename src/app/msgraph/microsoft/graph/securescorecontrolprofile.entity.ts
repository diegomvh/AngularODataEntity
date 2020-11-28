import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceInformation } from './complianceinformation.complex';
import { SecureScoreControlStateUpdate } from './securescorecontrolstateupdate.complex';
import { SecurityVendorInformation } from './securityvendorinformation.complex';
import { ComplianceInformationModel } from './complianceinformation.model';
import { SecureScoreControlStateUpdateModel } from './securescorecontrolstateupdate.model';
import { SecurityVendorInformationModel } from './securityvendorinformation.model';
import { EntityModel } from './entity.model';
import { ComplianceInformationCollection } from './complianceinformation.collection';
import { SecureScoreControlStateUpdateCollection } from './securescorecontrolstateupdate.collection';
import { SecurityVendorInformationCollection } from './securityvendorinformation.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface SecureScoreControlProfile extends Entity {
  //#region ODataApi Properties
  actionType?: string;
  actionUrl?: string;
  azureTenantId: string;
  complianceInformation?: ComplianceInformation[];
  controlCategory?: string;
  controlStateUpdates?: SecureScoreControlStateUpdate[];
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
  vendorInformation?: SecurityVendorInformation;
  //#endregion
}