import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface SoftwareUpdateStatusSummary extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  compliantDeviceCount: number;
  nonCompliantDeviceCount: number;
  remediatedDeviceCount: number;
  errorDeviceCount: number;
  unknownDeviceCount: number;
  conflictDeviceCount: number;
  notApplicableDeviceCount: number;
  compliantUserCount: number;
  nonCompliantUserCount: number;
  remediatedUserCount: number;
  errorUserCount: number;
  unknownUserCount: number;
  conflictUserCount: number;
  notApplicableUserCount: number;
  //#endregion
}