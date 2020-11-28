import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeConnectorType } from './devicemanagementexchangeconnectortype.enum';
//#endregion

export const DeviceManagementExchangeConnectorTypeConfig = {
  name: "deviceManagementExchangeConnectorType",
  members: DeviceManagementExchangeConnectorType
} as EnumTypeConfig<DeviceManagementExchangeConnectorType>;