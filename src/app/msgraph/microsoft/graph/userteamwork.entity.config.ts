import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserTeamwork } from './userteamwork.entity';
import { UserTeamworkModel } from './userteamwork.model';
import { UserTeamworkCollection } from './userteamwork.collection';
//#endregion

export const UserTeamworkConfig = {
  name: "userTeamwork",
  base: "microsoft.graph.entity",
  model: UserTeamworkModel,
  collection: UserTeamworkCollection,
  annotations: [],
  fields: {
    installedApps: {type: 'graph.userScopeTeamsAppInstallation', collection: true, navigation: true}
  }
} as StructuredTypeConfig<UserTeamwork>;