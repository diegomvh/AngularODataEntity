import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UpdateWindowsDeviceAccountActionParameter } from './updatewindowsdeviceaccountactionparameter.entity';
//#endregion

export const UpdateWindowsDeviceAccountActionParameterConfig = {
  name: "updateWindowsDeviceAccountActionParameter",
  annotations: [],
  fields: {
    deviceAccount: {type: 'graph.windowsDeviceAccount'},
    passwordRotationEnabled: {type: 'Edm.Boolean'},
    calendarSyncEnabled: {type: 'Edm.Boolean'},
    deviceAccountEmail: {type: 'Edm.String'},
    exchangeServer: {type: 'Edm.String'},
    sessionInitiationProtocalAddress: {type: 'Edm.String'}
  }
} as EntityConfig<UpdateWindowsDeviceAccountActionParameter>;