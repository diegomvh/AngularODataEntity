import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosLobAppAssignmentSettings } from './ioslobappassignmentsettings.entity';
//#endregion

export const IosLobAppAssignmentSettingsConfig = {
  name: "IosLobAppAssignmentSettings",
  base: "microsoft.graph.mobileAppAssignmentSettings",
  annotations: [],
  fields: {
    vpnConfigurationId: {type: 'Edm.String'}
  }
} as EntityConfig<IosLobAppAssignmentSettings>;