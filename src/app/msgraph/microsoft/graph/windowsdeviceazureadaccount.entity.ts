import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.entity';
import { WindowsDeviceAccountModel } from './windowsdeviceaccount.model';
import { WindowsDeviceAccountCollection } from './windowsdeviceaccount.collection';
//#endregion

export interface WindowsDeviceAzureADAccount extends WindowsDeviceAccount {
  //#region ODataApi Properties
  userPrincipalName?: string;
  //#endregion
}