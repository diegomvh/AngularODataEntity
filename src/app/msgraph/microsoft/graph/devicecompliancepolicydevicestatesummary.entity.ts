import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceCompliancePolicyDeviceStateSummary extends Entity {
  //#region ODataApi Properties
  compliantDeviceCount: number;
  configManagerCount: number;
  conflictDeviceCount: number;
  errorDeviceCount: number;
  inGracePeriodCount: number;
  nonCompliantDeviceCount: number;
  notApplicableDeviceCount: number;
  remediatedDeviceCount: number;
  unknownDeviceCount: number;
  //#endregion
}