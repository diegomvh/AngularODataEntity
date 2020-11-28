import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface SettingStateDeviceSummary extends Entity {
  //#region ODataApi Properties
  compliantDeviceCount: number;
  conflictDeviceCount: number;
  errorDeviceCount: number;
  instancePath?: string;
  nonCompliantDeviceCount: number;
  notApplicableDeviceCount: number;
  remediatedDeviceCount: number;
  settingName?: string;
  unknownDeviceCount: number;
  //#endregion
}