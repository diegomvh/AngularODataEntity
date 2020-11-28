import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceExchangeAccessStateSummary {
  //#region ODataApi Properties
  allowedDeviceCount: number;
  blockedDeviceCount: number;
  quarantinedDeviceCount: number;
  unavailableDeviceCount: number;
  unknownDeviceCount: number;
  //#endregion
}