import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { IosUpdatesInstallStatus } from './iosupdatesinstallstatus.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface IosUpdateDeviceStatus extends Entity {
  //#region ODataApi Properties
  complianceGracePeriodExpirationDateTime: Date;
  deviceDisplayName?: string;
  deviceId?: string;
  deviceModel?: string;
  installStatus: IosUpdatesInstallStatus;
  lastReportedDateTime: Date;
  osVersion?: string;
  status: ComplianceStatus;
  userId?: string;
  userName?: string;
  userPrincipalName?: string;
  //#endregion
}