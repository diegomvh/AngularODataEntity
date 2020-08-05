﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceRegistrationState } from './deviceregistrationstate.enum';
//#endregion

export const DeviceRegistrationStateConfig = {
  name: "deviceRegistrationState",
  members: DeviceRegistrationState
} as EnumConfig<DeviceRegistrationState>;