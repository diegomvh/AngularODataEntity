﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeConnectorSyncType } from './devicemanagementexchangeconnectorsynctype.enum';
//#endregion

export const DeviceManagementExchangeConnectorSyncTypeConfig = {
  name: "deviceManagementExchangeConnectorSyncType",
  members: DeviceManagementExchangeConnectorSyncType
} as EnumConfig<DeviceManagementExchangeConnectorSyncType>;