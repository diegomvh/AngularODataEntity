import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentPlatformRestriction } from './deviceenrollmentplatformrestriction.entity';
import { DeviceEnrollmentPlatformRestrictionModel } from './deviceenrollmentplatformrestriction.model';
import { DeviceEnrollmentPlatformRestrictionCollection } from './deviceenrollmentplatformrestriction.collection';
//#endregion

export const DeviceEnrollmentPlatformRestrictionConfig = {
  name: "deviceEnrollmentPlatformRestriction",
  model: DeviceEnrollmentPlatformRestrictionModel,
  collection: DeviceEnrollmentPlatformRestrictionCollection,
  annotations: [],
  fields: {
    osMaximumVersion: {type: 'Edm.String'},
    osMinimumVersion: {type: 'Edm.String'},
    personalDeviceEnrollmentBlocked: {type: 'Edm.Boolean', nullable: false},
    platformBlocked: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<DeviceEnrollmentPlatformRestriction>;