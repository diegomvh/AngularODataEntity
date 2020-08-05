import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentPlatformRestriction } from './deviceenrollmentplatformrestriction.entity';
//#endregion

export const DeviceEnrollmentPlatformRestrictionConfig = {
  name: "DeviceEnrollmentPlatformRestriction",
  annotations: [],
  fields: {
    platformBlocked: {type: 'Edm.Boolean', nullable: false},
    personalDeviceEnrollmentBlocked: {type: 'Edm.Boolean', nullable: false},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceEnrollmentPlatformRestriction>;