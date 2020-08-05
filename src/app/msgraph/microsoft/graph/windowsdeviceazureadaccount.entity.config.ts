import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceAzureADAccount } from './windowsdeviceazureadaccount.entity';
//#endregion

export const WindowsDeviceAzureADAccountConfig = {
  name: "WindowsDeviceAzureADAccount",
  base: "microsoft.graph.windowsDeviceAccount",
  annotations: [],
  fields: {
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<WindowsDeviceAzureADAccount>;