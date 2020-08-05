import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementSubscriptionState } from './devicemanagementsubscriptionstate.enum';
//#endregion

export const DeviceManagementSubscriptionStateConfig = {
  name: "deviceManagementSubscriptionState",
  members: DeviceManagementSubscriptionState
} as EnumConfig<DeviceManagementSubscriptionState>;