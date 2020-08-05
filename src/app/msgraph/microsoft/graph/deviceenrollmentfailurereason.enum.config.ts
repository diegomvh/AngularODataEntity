﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentFailureReason } from './deviceenrollmentfailurereason.enum';
//#endregion

export const DeviceEnrollmentFailureReasonConfig = {
  name: "DeviceEnrollmentFailureReason",
  members: DeviceEnrollmentFailureReason
} as EnumConfig<DeviceEnrollmentFailureReason>;