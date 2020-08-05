import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeConnectorStatus } from './devicemanagementexchangeconnectorstatus.enum';
//#endregion

export const DeviceManagementExchangeConnectorStatusConfig = {
  name: "deviceManagementExchangeConnectorStatus",
  members: DeviceManagementExchangeConnectorStatus
} as EnumConfig<DeviceManagementExchangeConnectorStatus>;