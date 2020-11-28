import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceOwnerType } from './manageddeviceownertype.enum';
//#endregion

export const ManagedDeviceOwnerTypeConfig = {
  name: "managedDeviceOwnerType",
  members: ManagedDeviceOwnerType
} as EnumTypeConfig<ManagedDeviceOwnerType>;