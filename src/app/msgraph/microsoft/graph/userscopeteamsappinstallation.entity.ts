import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { TeamsAppInstallation } from './teamsappinstallation.entity';
import { Chat } from './chat.entity';
import { ChatModel } from './chat.model';
import { TeamsAppInstallationModel } from './teamsappinstallation.model';
import { ChatCollection } from './chat.collection';
import { TeamsAppInstallationCollection } from './teamsappinstallation.collection';
//#endregion

export interface UserScopeTeamsAppInstallation extends TeamsAppInstallation {
  //#region ODataApi Properties
  chat?: Chat;
  //#endregion
}