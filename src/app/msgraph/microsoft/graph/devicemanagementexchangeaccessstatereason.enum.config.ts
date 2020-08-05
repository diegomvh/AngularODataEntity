﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeAccessStateReason } from './devicemanagementexchangeaccessstatereason.enum';
//#endregion

export const DeviceManagementExchangeAccessStateReasonConfig = {
  name: "deviceManagementExchangeAccessStateReason",
  members: DeviceManagementExchangeAccessStateReason
} as EnumConfig<DeviceManagementExchangeAccessStateReason>;