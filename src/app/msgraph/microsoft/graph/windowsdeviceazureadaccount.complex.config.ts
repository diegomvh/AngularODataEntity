import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceAzureADAccount } from './windowsdeviceazureadaccount.complex';
import { WindowsDeviceAzureADAccountModel } from './windowsdeviceazureadaccount.model';
import { WindowsDeviceAzureADAccountCollection } from './windowsdeviceazureadaccount.collection';
//#endregion

export const WindowsDeviceAzureADAccountConfig = {
  name: "windowsDeviceAzureADAccount",
  base: "microsoft.graph.windowsDeviceAccount",
  model: WindowsDeviceAzureADAccountModel,
  collection: WindowsDeviceAzureADAccountCollection,
  annotations: [],
  fields: {
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsDeviceAzureADAccount>;