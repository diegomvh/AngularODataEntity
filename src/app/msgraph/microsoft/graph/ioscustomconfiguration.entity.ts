import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface IosCustomConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  payload: ArrayBuffer;
  payloadFileName?: string;
  payloadName: string;
  //#endregion
}