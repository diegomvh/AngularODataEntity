import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosLobAppAssignmentSettings } from './ioslobappassignmentsettings.complex';
import { IosLobAppAssignmentSettingsModel } from './ioslobappassignmentsettings.model';
import { IosLobAppAssignmentSettingsCollection } from './ioslobappassignmentsettings.collection';
//#endregion

export const IosLobAppAssignmentSettingsConfig = {
  name: "iosLobAppAssignmentSettings",
  base: "microsoft.graph.mobileAppAssignmentSettings",
  model: IosLobAppAssignmentSettingsModel,
  collection: IosLobAppAssignmentSettingsCollection,
  annotations: [],
  fields: {
    vpnConfigurationId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<IosLobAppAssignmentSettings>;