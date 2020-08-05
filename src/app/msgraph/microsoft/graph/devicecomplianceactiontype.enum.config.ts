import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceActionType } from './devicecomplianceactiontype.enum';
//#endregion

export const DeviceComplianceActionTypeConfig = {
  name: "DeviceComplianceActionType",
  members: DeviceComplianceActionType
} as EnumConfig<DeviceComplianceActionType>;