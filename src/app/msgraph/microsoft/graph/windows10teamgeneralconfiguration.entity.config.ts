import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10TeamGeneralConfiguration } from './windows10teamgeneralconfiguration.entity';
import { Windows10TeamGeneralConfigurationModel } from './windows10teamgeneralconfiguration.model';
import { Windows10TeamGeneralConfigurationCollection } from './windows10teamgeneralconfiguration.collection';
//#endregion

export const Windows10TeamGeneralConfigurationConfig = {
  name: "windows10TeamGeneralConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: Windows10TeamGeneralConfigurationModel,
  collection: Windows10TeamGeneralConfigurationCollection,
  annotations: [],
  fields: {
    azureOperationalInsightsBlockTelemetry: {type: 'Edm.Boolean', nullable: false},
    azureOperationalInsightsWorkspaceId: {type: 'Edm.String'},
    azureOperationalInsightsWorkspaceKey: {type: 'Edm.String'},
    connectAppBlockAutoLaunch: {type: 'Edm.Boolean', nullable: false},
    maintenanceWindowBlocked: {type: 'Edm.Boolean', nullable: false},
    maintenanceWindowDurationInHours: {type: 'Edm.Int32'},
    maintenanceWindowStartTime: {type: 'Edm.TimeOfDay'},
    miracastBlocked: {type: 'Edm.Boolean', nullable: false},
    miracastChannel: {type: 'graph.miracastChannel', nullable: false},
    miracastRequirePin: {type: 'Edm.Boolean', nullable: false},
    settingsBlockMyMeetingsAndFiles: {type: 'Edm.Boolean', nullable: false},
    settingsBlockSessionResume: {type: 'Edm.Boolean', nullable: false},
    settingsBlockSigninSuggestions: {type: 'Edm.Boolean', nullable: false},
    settingsDefaultVolume: {type: 'Edm.Int32'},
    settingsScreenTimeoutInMinutes: {type: 'Edm.Int32'},
    settingsSessionTimeoutInMinutes: {type: 'Edm.Int32'},
    settingsSleepTimeoutInMinutes: {type: 'Edm.Int32'},
    welcomeScreenBackgroundImageUrl: {type: 'Edm.String'},
    welcomeScreenBlockAutomaticWakeUp: {type: 'Edm.Boolean', nullable: false},
    welcomeScreenMeetingInformation: {type: 'graph.welcomeScreenMeetingInformation', nullable: false}
  }
} as EntityConfig<Windows10TeamGeneralConfiguration>;