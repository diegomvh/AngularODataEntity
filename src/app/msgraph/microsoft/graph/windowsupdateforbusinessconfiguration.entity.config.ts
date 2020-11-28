import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateForBusinessConfiguration } from './windowsupdateforbusinessconfiguration.entity';
import { WindowsUpdateForBusinessConfigurationModel } from './windowsupdateforbusinessconfiguration.model';
import { WindowsUpdateForBusinessConfigurationCollection } from './windowsupdateforbusinessconfiguration.collection';
//#endregion

export const WindowsUpdateForBusinessConfigurationConfig = {
  name: "windowsUpdateForBusinessConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: WindowsUpdateForBusinessConfigurationModel,
  collection: WindowsUpdateForBusinessConfigurationCollection,
  annotations: [],
  fields: {
    automaticUpdateMode: {type: 'graph.automaticUpdateMode', nullable: false},
    businessReadyUpdatesOnly: {type: 'graph.windowsUpdateType', nullable: false},
    deliveryOptimizationMode: {type: 'graph.windowsDeliveryOptimizationMode', nullable: false},
    driversExcluded: {type: 'Edm.Boolean', nullable: false},
    featureUpdatesDeferralPeriodInDays: {type: 'Edm.Int32', nullable: false},
    featureUpdatesPaused: {type: 'Edm.Boolean', nullable: false},
    featureUpdatesPauseExpiryDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    installationSchedule: {type: 'graph.windowsUpdateInstallScheduleType'},
    microsoftUpdateServiceAllowed: {type: 'Edm.Boolean', nullable: false},
    prereleaseFeatures: {type: 'graph.prereleaseFeatures', nullable: false},
    qualityUpdatesDeferralPeriodInDays: {type: 'Edm.Int32', nullable: false},
    qualityUpdatesPaused: {type: 'Edm.Boolean', nullable: false},
    qualityUpdatesPauseExpiryDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as StructuredTypeConfig<WindowsUpdateForBusinessConfiguration>;