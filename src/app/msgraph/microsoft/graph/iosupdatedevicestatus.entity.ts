import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { IosUpdatesInstallStatus } from './iosupdatesinstallstatus.enum';
//#endregion

export interface IosUpdateDeviceStatus extends Entity {
  //#region ODataApi Properties
  installStatus: IosUpdatesInstallStatus;
  osVersion?: string;
  deviceId?: string;
  userId?: string;
  deviceDisplayName?: string;
  userName?: string;
  deviceModel?: string;
  complianceGracePeriodExpirationDateTime: Date;
  status: ComplianceStatus;
  lastReportedDateTime: Date;
  userPrincipalName?: string;
  //#endregion
}