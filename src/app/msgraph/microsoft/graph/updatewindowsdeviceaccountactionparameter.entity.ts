import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.entity';
import { WindowsDeviceAccountModel } from './windowsdeviceaccount.model';
import { WindowsDeviceAccountCollection } from './windowsdeviceaccount.collection';
//#endregion

export interface UpdateWindowsDeviceAccountActionParameter {
  //#region ODataApi Properties
  calendarSyncEnabled?: boolean;
  deviceAccount?: WindowsDeviceAccount;
  deviceAccountEmail?: string;
  exchangeServer?: string;
  passwordRotationEnabled?: boolean;
  sessionInitiationProtocalAddress?: string;
  //#endregion
}