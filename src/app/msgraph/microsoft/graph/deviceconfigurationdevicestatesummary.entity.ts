import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceConfigurationDeviceStateSummary extends Entity {
  //#region ODataApi Properties
  compliantDeviceCount: number;
  conflictDeviceCount: number;
  errorDeviceCount: number;
  nonCompliantDeviceCount: number;
  notApplicableDeviceCount: number;
  remediatedDeviceCount: number;
  unknownDeviceCount: number;
  //#endregion
}