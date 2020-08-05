import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
//#endregion

export interface DeviceConfigurationUserStatus extends Entity {
  //#region ODataApi Properties
  userDisplayName?: string;
  devicesCount: number;
  status: ComplianceStatus;
  lastReportedDateTime: Date;
  userPrincipalName?: string;
  //#endregion
}