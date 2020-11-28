import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { LobbyBypassScope } from './lobbybypassscope.enum';
//#endregion

export interface LobbyBypassSettings {
  //#region ODataApi Properties
  isDialInBypassEnabled?: boolean;
  scope?: LobbyBypassScope;
  //#endregion
}