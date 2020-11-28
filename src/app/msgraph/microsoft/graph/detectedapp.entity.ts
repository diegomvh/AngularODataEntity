import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ManagedDevice } from './manageddevice.entity';
import { EntityModel } from './entity.model';
import { ManagedDeviceModel } from './manageddevice.model';
import { EntityCollection } from './entity.collection';
import { ManagedDeviceCollection } from './manageddevice.collection';
//#endregion

export interface DetectedApp extends Entity {
  //#region ODataApi Properties
  deviceCount: number;
  displayName?: string;
  sizeInByte: number;
  version?: string;
  managedDevices?: ManagedDevice[];
  //#endregion
}