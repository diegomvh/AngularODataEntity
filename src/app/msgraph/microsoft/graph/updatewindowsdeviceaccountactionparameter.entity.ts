import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.entity';
//#endregion

export interface UpdateWindowsDeviceAccountActionParameter {
  //#region ODataApi Properties
  deviceAccount?: WindowsDeviceAccount;
  passwordRotationEnabled?: boolean;
  calendarSyncEnabled?: boolean;
  deviceAccountEmail?: string;
  exchangeServer?: string;
  sessionInitiationProtocalAddress?: string;
  //#endregion
}