import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { UserTeamwork } from './userteamwork.entity';
import { UserScopeTeamsAppInstallation } from './userscopeteamsappinstallation.entity';
import { UserScopeTeamsAppInstallationModel } from './userscopeteamsappinstallation.model';
import { UserTeamworkCollection } from './userteamwork.collection';
import { UserScopeTeamsAppInstallationCollection } from './userscopeteamsappinstallation.collection';
//#endregion

export class UserTeamworkModel<E extends UserTeamwork> extends EntityModel<E> {
  //#region ODataApi Properties
  installedApps?: UserScopeTeamsAppInstallationCollection<UserScopeTeamsAppInstallation, UserScopeTeamsAppInstallationModel<UserScopeTeamsAppInstallation>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}