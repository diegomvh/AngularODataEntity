import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserSettings } from './usersettings.entity';
import { UserSettingsModel } from './usersettings.model';
import { UserSettingsCollection } from './usersettings.collection';
//#endregion

export const UserSettingsConfig = {
  name: "userSettings",
  base: "microsoft.graph.entity",
  model: UserSettingsModel,
  collection: UserSettingsCollection,
  annotations: [],
  fields: {
    contributionToContentDiscoveryAsOrganizationDisabled: {type: 'Edm.Boolean', nullable: false},
    contributionToContentDiscoveryDisabled: {type: 'Edm.Boolean', nullable: false},
    shiftPreferences: {type: 'graph.shiftPreferences', navigation: true}
  }
} as EntityConfig<UserSettings>;