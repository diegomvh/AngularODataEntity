import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { SecurityVendorInformation } from './securityvendorinformation.entity';
import { ComplianceInformation } from './complianceinformation.entity';
import { SecureScoreControlStateUpdate } from './securescorecontrolstateupdate.entity';
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