import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserSettings } from './usersettings.entity';
//#endregion

export const UserSettingsConfig = {
  name: "userSettings",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    contributionToContentDiscoveryDisabled: {type: 'Edm.Boolean', nullable: false},
    contributionToContentDiscoveryAsOrganizationDisabled: {type: 'Edm.Boolean', nullable: false},
    shiftPreferences: {type: 'graph.shiftPreferences', navigation: true}
  }
} as EntityConfig<UserSettings>;