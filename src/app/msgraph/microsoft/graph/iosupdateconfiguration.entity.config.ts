import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosUpdateConfiguration } from './iosupdateconfiguration.entity';
//#endregion

export const IosUpdateConfigurationConfig = {
  name: "iosUpdateConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    activeHoursStart: {type: 'Edm.TimeOfDay', nullable: false},
    activeHoursEnd: {type: 'Edm.TimeOfDay', nullable: false},
    scheduledInstallDays: {type: 'graph.dayOfWeek', nullable: false, collection: true},
    utcTimeOffsetInMinutes: {type: 'Edm.Int32'}
  }
} as EntityConfig<IosUpdateConfiguration>;