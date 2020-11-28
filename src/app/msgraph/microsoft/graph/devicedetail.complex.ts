import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceDetail {
  //#region ODataApi Properties
  browser?: string;
  deviceId?: string;
  displayName?: string;
  isCompliant?: boolean;
  isManaged?: boolean;
  operatingSystem?: string;
  trustType?: string;
  //#endregion
}