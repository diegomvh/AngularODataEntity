import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.entity';
//#endregion

export interface WindowsDeviceAzureADAccount extends WindowsDeviceAccount {
  //#region ODataApi Properties
  userPrincipalName?: string;
  //#endregion
}