import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementSubscriptionState } from './devicemanagementsubscriptionstate.enum';
//#endregion

export const DeviceManagementSubscriptionStateConfig = {
  name: "deviceManagementSubscriptionState",
  members: DeviceManagementSubscriptionState
} as EnumTypeConfig<DeviceManagementSubscriptionState>;