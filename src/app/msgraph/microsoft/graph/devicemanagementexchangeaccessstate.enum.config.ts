import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeAccessState } from './devicemanagementexchangeaccessstate.enum';
//#endregion

export const DeviceManagementExchangeAccessStateConfig = {
  name: "DeviceManagementExchangeAccessState",
  members: DeviceManagementExchangeAccessState
} as EnumConfig<DeviceManagementExchangeAccessState>;