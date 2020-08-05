import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentType } from './deviceenrollmenttype.enum';
//#endregion

export const DeviceEnrollmentTypeConfig = {
  name: "deviceEnrollmentType",
  members: DeviceEnrollmentType
} as EnumConfig<DeviceEnrollmentType>;