import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
//#endregion

export interface IosCustomConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  payloadName: string;
  payloadFileName?: string;
  payload: ArrayBuffer;
  //#endregion
}