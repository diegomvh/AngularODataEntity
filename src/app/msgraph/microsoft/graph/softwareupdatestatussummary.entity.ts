import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface SoftwareUpdateStatusSummary extends Entity {
  //#region ODataApi Properties
  compliantDeviceCount: number;
  compliantUserCount: number;
  conflictDeviceCount: number;
  conflictUserCount: number;
  displayName?: string;
  errorDeviceCount: number;
  errorUserCount: number;
  nonCompliantDeviceCount: number;
  nonCompliantUserCount: number;
  notApplicableDeviceCount: number;
  notApplicableUserCount: number;
  remediatedDeviceCount: number;
  remediatedUserCount: number;
  unknownDeviceCount: number;
  unknownUserCount: number;
  //#endregion
}