import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeAccessStateReason } from './devicemanagementexchangeaccessstatereason.enum';
//#endregion

export const DeviceManagementExchangeAccessStateReasonConfig = {
  name: "deviceManagementExchangeAccessStateReason",
  members: DeviceManagementExchangeAccessStateReason
} as EnumTypeConfig<DeviceManagementExchangeAccessStateReason>;