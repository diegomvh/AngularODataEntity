import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceDetail {
  //#region ODataApi Properties
  deviceId?: string;
  displayName?: string;
  operatingSystem?: string;
  browser?: string;
  isCompliant?: boolean;
  isManaged?: boolean;
  trustType?: string;
  //#endregion
}