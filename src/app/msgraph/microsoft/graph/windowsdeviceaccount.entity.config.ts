import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.entity';
//#endregion

export const WindowsDeviceAccountConfig = {
  name: "WindowsDeviceAccount",
  annotations: [],
  fields: {
    password: {type: 'Edm.String'}
  }
} as EntityConfig<WindowsDeviceAccount>;