import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementPartnerTenantState } from './devicemanagementpartnertenantstate.enum';
//#endregion

export const DeviceManagementPartnerTenantStateConfig = {
  name: "deviceManagementPartnerTenantState",
  members: DeviceManagementPartnerTenantState
} as EnumConfig<DeviceManagementPartnerTenantState>;