import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementSettings } from './devicemanagementsettings.entity';
//#endregion

export const DeviceManagementSettingsConfig = {
  name: "DeviceManagementSettings",
  annotations: [],
  fields: {
    deviceComplianceCheckinThresholdDays: {type: 'Edm.Int32', nullable: false},
    isScheduledActionEnabled: {type: 'Edm.Boolean', nullable: false},
    secureByDefault: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<DeviceManagementSettings>;