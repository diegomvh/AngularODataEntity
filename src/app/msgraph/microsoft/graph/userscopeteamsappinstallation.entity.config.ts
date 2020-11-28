import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserScopeTeamsAppInstallation } from './userscopeteamsappinstallation.entity';
import { UserScopeTeamsAppInstallationModel } from './userscopeteamsappinstallation.model';
import { UserScopeTeamsAppInstallationCollection } from './userscopeteamsappinstallation.collection';
//#endregion

export const UserScopeTeamsAppInstallationConfig = {
  name: "userScopeTeamsAppInstallation",
  base: "microsoft.graph.teamsAppInstallation",
  model: UserScopeTeamsAppInstallationModel,
  collection: UserScopeTeamsAppInstallationCollection,
  annotations: [],
  fields: {
    chat: {type: 'graph.chat', navigation: true}
  }
} as StructuredTypeConfig<UserScopeTeamsAppInstallation>;