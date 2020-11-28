import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceComplianceSettingState extends Entity {
  //#region ODataApi Properties
  complianceGracePeriodExpirationDateTime: Date;
  deviceId?: string;
  deviceModel?: string;
  deviceName?: string;
  setting?: string;
  settingName?: string;
  state: ComplianceStatus;
  userEmail?: string;
  userId?: string;
  userName?: string;
  userPrincipalName?: string;
  //#endregion
}