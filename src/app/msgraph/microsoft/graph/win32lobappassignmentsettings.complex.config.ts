import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppAssignmentSettings } from './win32lobappassignmentsettings.complex';
import { Win32LobAppAssignmentSettingsModel } from './win32lobappassignmentsettings.model';
import { Win32LobAppAssignmentSettingsCollection } from './win32lobappassignmentsettings.collection';
//#endregion

export const Win32LobAppAssignmentSettingsConfig = {
  name: "win32LobAppAssignmentSettings",
  base: "microsoft.graph.mobileAppAssignmentSettings",
  model: Win32LobAppAssignmentSettingsModel,
  collection: Win32LobAppAssignmentSettingsCollection,
  annotations: [],
  fields: {
    installTimeSettings: {type: 'graph.mobileAppInstallTimeSettings'},
    notifications: {type: 'graph.win32LobAppNotification', nullable: false},
    restartSettings: {type: 'graph.win32LobAppRestartSettings'}
  }
} as StructuredTypeConfig<Win32LobAppAssignmentSettings>;