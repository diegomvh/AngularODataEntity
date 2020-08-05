import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.entity';
//#endregion

export interface WindowsDeviceADAccount extends WindowsDeviceAccount {
  //#region ODataApi Properties
  domainName?: string;
  userName?: string;
  //#endregion
}