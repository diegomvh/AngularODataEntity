import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ManagedDeviceMobileAppConfigurationDeviceStatus extends Entity {
  //#region ODataApi Properties
  complianceGracePeriodExpirationDateTime: Date;
  deviceDisplayName?: string;
  deviceModel?: string;
  lastReportedDateTime: Date;
  status: ComplianceStatus;
  userName?: string;
  userPrincipalName?: string;
  //#endregion
}