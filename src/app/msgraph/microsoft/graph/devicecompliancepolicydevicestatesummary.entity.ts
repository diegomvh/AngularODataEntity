import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface DeviceCompliancePolicyDeviceStateSummary extends Entity {
  //#region ODataApi Properties
  inGracePeriodCount: number;
  configManagerCount: number;
  unknownDeviceCount: number;
  notApplicableDeviceCount: number;
  compliantDeviceCount: number;
  remediatedDeviceCount: number;
  nonCompliantDeviceCount: number;
  errorDeviceCount: number;
  conflictDeviceCount: number;
  //#endregion
}