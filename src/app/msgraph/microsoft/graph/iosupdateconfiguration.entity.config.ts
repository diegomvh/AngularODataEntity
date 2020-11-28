import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosUpdateConfiguration } from './iosupdateconfiguration.entity';
import { IosUpdateConfigurationModel } from './iosupdateconfiguration.model';
import { IosUpdateConfigurationCollection } from './iosupdateconfiguration.collection';
//#endregion

export const IosUpdateConfigurationConfig = {
  name: "iosUpdateConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: IosUpdateConfigurationModel,
  collection: IosUpdateConfigurationCollection,
  annotations: [],
  fields: {
    activeHoursEnd: {type: 'Edm.TimeOfDay', nullable: false},
    activeHoursStart: {type: 'Edm.TimeOfDay', nullable: false},
    scheduledInstallDays: {type: 'graph.dayOfWeek', nullable: false, collection: true},
    utcTimeOffsetInMinutes: {type: 'Edm.Int32'}
  }
} as EntityConfig<IosUpdateConfiguration>;