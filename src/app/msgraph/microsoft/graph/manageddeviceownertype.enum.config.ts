import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceOwnerType } from './manageddeviceownertype.enum';
//#endregion

export const ManagedDeviceOwnerTypeConfig = {
  name: "ManagedDeviceOwnerType",
  members: ManagedDeviceOwnerType
} as EnumConfig<ManagedDeviceOwnerType>;