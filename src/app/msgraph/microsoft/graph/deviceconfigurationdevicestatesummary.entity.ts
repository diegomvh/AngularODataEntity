import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface DeviceConfigurationDeviceStateSummary extends Entity {
  //#region ODataApi Properties
  unknownDeviceCount: number;
  notApplicableDeviceCount: number;
  compliantDeviceCount: number;
  remediatedDeviceCount: number;
  nonCompliantDeviceCount: number;
  errorDeviceCount: number;
  conflictDeviceCount: number;
  //#endregion
}