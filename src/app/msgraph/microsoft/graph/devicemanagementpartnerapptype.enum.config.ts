import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementPartnerAppType } from './devicemanagementpartnerapptype.enum';
//#endregion

export const DeviceManagementPartnerAppTypeConfig = {
  name: "DeviceManagementPartnerAppType",
  members: DeviceManagementPartnerAppType
} as EnumConfig<DeviceManagementPartnerAppType>;