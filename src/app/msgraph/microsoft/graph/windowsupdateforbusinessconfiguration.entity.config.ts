import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateForBusinessConfiguration } from './windowsupdateforbusinessconfiguration.entity';
//#endregion

export const WindowsUpdateForBusinessConfigurationConfig = {
  name: "windowsUpdateForBusinessConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    deliveryOptimizationMode: {type: 'graph.windowsDeliveryOptimizationMode', nullable: false},
    prereleaseFeatures: {type: 'graph.prereleaseFeatures', nullable: false},
    automaticUpdateMode: {type: 'graph.automaticUpdateMode', nullable: false},
    microsoftUpdateServiceAllowed: {type: 'Edm.Boolean', nullable: false},
    driversExcluded: {type: 'Edm.Boolean', nullable: false},
    installationSchedule: {type: 'graph.windowsUpdateInstallScheduleType'},
    qualityUpdatesDeferralPeriodInDays: {type: 'Edm.Int32', nullable: false},
    featureUpdatesDeferralPeriodInDays: {type: 'Edm.Int32', nullable: false},
    qualityUpdatesPaused: {type: 'Edm.Boolean', nullable: false},
    featureUpdatesPaused: {type: 'Edm.Boolean', nullable: false},
    qualityUpdatesPauseExpiryDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    featureUpdatesPauseExpiryDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    businessReadyUpdatesOnly: {type: 'graph.windowsUpdateType', nullable: false}
  }
} as EntityConfig<WindowsUpdateForBusinessConfiguration>;