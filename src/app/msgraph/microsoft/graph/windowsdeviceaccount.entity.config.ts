import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceAccount } from './windowsdeviceaccount.entity';
import { WindowsDeviceAccountModel } from './windowsdeviceaccount.model';
import { WindowsDeviceAccountCollection } from './windowsdeviceaccount.collection';
//#endregion

export const WindowsDeviceAccountConfig = {
  name: "windowsDeviceAccount",
  model: WindowsDeviceAccountModel,
  collection: WindowsDeviceAccountCollection,
  annotations: [],
  fields: {
    password: {type: 'Edm.String'}
  }
} as EntityConfig<WindowsDeviceAccount>;