import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeamsAppInstallationModel } from './teamsappinstallation.model';
import { Chat } from './chat.entity';
import { UserScopeTeamsAppInstallation } from './userscopeteamsappinstallation.entity';
import { ChatModel } from './chat.model';
import { ChatCollection } from './chat.collection';
import { UserScopeTeamsAppInstallationCollection } from './userscopeteamsappinstallation.collection';
//#endregion

export class UserScopeTeamsAppInstallationModel<E extends UserScopeTeamsAppInstallation> extends TeamsAppInstallationModel<E> {
  //#region ODataApi Properties
  chat?: ChatModel<Chat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}