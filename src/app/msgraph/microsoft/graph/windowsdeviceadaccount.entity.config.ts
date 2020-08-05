import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceADAccount } from './windowsdeviceadaccount.entity';
//#endregion

export const WindowsDeviceADAccountConfig = {
  name: "WindowsDeviceADAccount",
  base: "microsoft.graph.windowsDeviceAccount",
  annotations: [],
  fields: {
    domainName: {type: 'Edm.String'},
    userName: {type: 'Edm.String'}
  }
} as EntityConfig<WindowsDeviceADAccount>;