import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceComplianceUserStatus extends Entity {
  //#region ODataApi Properties
  devicesCount: number;
  lastReportedDateTime: Date;
  status: ComplianceStatus;
  userDisplayName?: string;
  userPrincipalName?: string;
  //#endregion
}