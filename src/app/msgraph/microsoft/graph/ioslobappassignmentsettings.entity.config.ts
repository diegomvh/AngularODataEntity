import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosLobAppAssignmentSettings } from './ioslobappassignmentsettings.entity';
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
} as EntityConfig<IosLobAppAssignmentSettings>;