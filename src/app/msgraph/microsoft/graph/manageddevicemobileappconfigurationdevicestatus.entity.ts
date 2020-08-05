import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
//#endregion

export interface ManagedDeviceMobileAppConfigurationDeviceStatus extends Entity {
  //#region ODataApi Properties
  deviceDisplayName?: string;
  userName?: string;
  deviceModel?: string;
  complianceGracePeriodExpirationDateTime: Date;
  status: ComplianceStatus;
  lastReportedDateTime: Date;
  userPrincipalName?: string;
  //#endregion
}