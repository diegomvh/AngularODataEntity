import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamsAppInstallationCollection } from './teamsappinstallation.collection';
import { Chat } from './chat.entity';
import { UserScopeTeamsAppInstallation } from './userscopeteamsappinstallation.entity';
import { ChatModel } from './chat.model';
import { UserScopeTeamsAppInstallationModel } from './userscopeteamsappinstallation.model';
import { ChatCollection } from './chat.collection';
//#endregion

export class UserScopeTeamsAppInstallationCollection<E extends UserScopeTeamsAppInstallation, M extends UserScopeTeamsAppInstallationModel<E>> extends TeamsAppInstallationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}