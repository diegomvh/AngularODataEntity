import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeConnectorType } from './devicemanagementexchangeconnectortype.enum';
//#endregion

export const DeviceManagementExchangeConnectorTypeConfig = {
  name: "DeviceManagementExchangeConnectorType",
  members: DeviceManagementExchangeConnectorType
} as EnumConfig<DeviceManagementExchangeConnectorType>;