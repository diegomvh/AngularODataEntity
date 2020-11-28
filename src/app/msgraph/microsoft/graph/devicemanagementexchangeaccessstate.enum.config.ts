import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeAccessState } from './devicemanagementexchangeaccessstate.enum';
//#endregion

export const DeviceManagementExchangeAccessStateConfig = {
  name: "deviceManagementExchangeAccessState",
  members: DeviceManagementExchangeAccessState
} as EnumTypeConfig<DeviceManagementExchangeAccessState>;