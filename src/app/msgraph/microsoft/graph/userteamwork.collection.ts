import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { UserTeamwork } from './userteamwork.entity';
import { UserScopeTeamsAppInstallation } from './userscopeteamsappinstallation.entity';
import { UserTeamworkModel } from './userteamwork.model';
import { UserScopeTeamsAppInstallationModel } from './userscopeteamsappinstallation.model';
import { UserScopeTeamsAppInstallationCollection } from './userscopeteamsappinstallation.collection';
//#endregion

export class UserTeamworkCollection<E extends UserTeamwork, M extends UserTeamworkModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}