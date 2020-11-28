import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UpdateWindowsDeviceAccountActionParameter } from './updatewindowsdeviceaccountactionparameter.entity';
import { UpdateWindowsDeviceAccountActionParameterModel } from './updatewindowsdeviceaccountactionparameter.model';
import { UpdateWindowsDeviceAccountActionParameterCollection } from './updatewindowsdeviceaccountactionparameter.collection';
//#endregion

export const UpdateWindowsDeviceAccountActionParameterConfig = {
  name: "updateWindowsDeviceAccountActionParameter",
  model: UpdateWindowsDeviceAccountActionParameterModel,
  collection: UpdateWindowsDeviceAccountActionParameterCollection,
  annotations: [],
  fields: {
    calendarSyncEnabled: {type: 'Edm.Boolean'},
    deviceAccount: {type: 'graph.windowsDeviceAccount'},
    deviceAccountEmail: {type: 'Edm.String'},
    exchangeServer: {type: 'Edm.String'},
    passwordRotationEnabled: {type: 'Edm.Boolean'},
    sessionInitiationProtocalAddress: {type: 'Edm.String'}
  }
} as EntityConfig<UpdateWindowsDeviceAccountActionParameter>;