import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceADAccount } from './windowsdeviceadaccount.complex';
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
} as StructuredTypeConfig<WindowsDeviceADAccount>;