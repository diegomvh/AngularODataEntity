import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.complex';
import { WindowsDeviceAccountModel } from './windowsdeviceaccount.model';
import { WindowsDeviceAccountCollection } from './windowsdeviceaccount.collection';
//#endregion

export interface WindowsDeviceADAccount extends WindowsDeviceAccount {
  //#region ODataApi Properties
  domainName?: string;
  userName?: string;
  //#endregion
}