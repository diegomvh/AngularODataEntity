import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceADAccount } from './windowsdeviceadaccount.entity';
import { WindowsDeviceADAccountModel } from './windowsdeviceadaccount.model';
import { WindowsDeviceADAccountCollection } from './windowsdeviceadaccount.collection';
//#endregion

export const WindowsDeviceADAccountConfig = {
  name: "windowsDeviceADAccount",
  base: "microsoft.graph.windowsDeviceAccount",
  model: WindowsDeviceADAccountModel,
  collection: WindowsDeviceADAccountCollection,
  annotations: [],
  fields: {
    domainName: {type: 'Edm.String'},
    userName: {type: 'Edm.String'}
  }
} as EntityConfig<WindowsDeviceADAccount>;