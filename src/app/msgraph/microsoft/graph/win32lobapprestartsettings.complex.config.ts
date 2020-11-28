import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRestartSettings } from './win32lobapprestartsettings.complex';
import { Win32LobAppRestartSettingsModel } from './win32lobapprestartsettings.model';
import { Win32LobAppRestartSettingsCollection } from './win32lobapprestartsettings.collection';
//#endregion

export const Win32LobAppRestartSettingsConfig = {
  name: "win32LobAppRestartSettings",
  model: Win32LobAppRestartSettingsModel,
  collection: Win32LobAppRestartSettingsCollection,
  annotations: [],
  fields: {
    countdownDisplayBeforeRestartInMinutes: {type: 'Edm.Int32', nullable: false},
    gracePeriodInMinutes: {type: 'Edm.Int32', nullable: false},
    restartNotificationSnoozeDurationInMinutes: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<Win32LobAppRestartSettings>;