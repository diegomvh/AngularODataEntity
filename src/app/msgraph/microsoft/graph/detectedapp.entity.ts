import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ManagedDevice } from './manageddevice.entity';
//#endregion

export interface DetectedApp extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  version?: string;
  sizeInByte: number;
  deviceCount: number;
  managedDevices?: ManagedDevice[];
  //#endregion
}