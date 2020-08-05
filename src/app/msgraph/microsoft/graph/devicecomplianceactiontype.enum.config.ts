import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceActionType } from './devicecomplianceactiontype.enum';
//#endregion

export const DeviceComplianceActionTypeConfig = {
  name: "deviceComplianceActionType",
  members: DeviceComplianceActionType
} as EnumConfig<DeviceComplianceActionType>;