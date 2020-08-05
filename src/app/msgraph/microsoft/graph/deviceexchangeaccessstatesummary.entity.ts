import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceExchangeAccessStateSummary {
  //#region ODataApi Properties
  allowedDeviceCount: number;
  blockedDeviceCount: number;
  quarantinedDeviceCount: number;
  unknownDeviceCount: number;
  unavailableDeviceCount: number;
  //#endregion
}