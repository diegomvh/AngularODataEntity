import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeAccessState } from './devicemanagementexchangeaccessstate.enum';
//#endregion

export const DeviceManagementExchangeAccessStateConfig = {
  name: "deviceManagementExchangeAccessState",
  members: DeviceManagementExchangeAccessState
} as EnumConfig<DeviceManagementExchangeAccessState>;