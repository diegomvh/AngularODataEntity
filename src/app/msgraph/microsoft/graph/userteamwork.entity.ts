import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { UserScopeTeamsAppInstallation } from './userscopeteamsappinstallation.entity';
import { EntityModel } from './entity.model';
import { UserScopeTeamsAppInstallationModel } from './userscopeteamsappinstallation.model';
import { EntityCollection } from './entity.collection';
import { UserScopeTeamsAppInstallationCollection } from './userscopeteamsappinstallation.collection';
//#endregion

export interface UserTeamwork extends Entity {
  //#region ODataApi Properties
  installedApps?: UserScopeTeamsAppInstallation[];
  //#endregion
}