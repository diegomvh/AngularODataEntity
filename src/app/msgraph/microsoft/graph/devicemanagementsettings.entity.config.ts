import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementSettings } from './devicemanagementsettings.entity';
import { DeviceManagementSettingsModel } from './devicemanagementsettings.model';
import { DeviceManagementSettingsCollection } from './devicemanagementsettings.collection';
//#endregion

export const DeviceManagementSettingsConfig = {
  name: "deviceManagementSettings",
  model: DeviceManagementSettingsModel,
  collection: DeviceManagementSettingsCollection,
  annotations: [],
  fields: {
    deviceComplianceCheckinThresholdDays: {type: 'Edm.Int32', nullable: false},
    isScheduledActionEnabled: {type: 'Edm.Boolean', nullable: false},
    secureByDefault: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<DeviceManagementSettings>;