import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { LobbyBypassScope } from './lobbybypassscope.enum';
//#endregion

export const LobbyBypassScopeConfig = {
  name: "lobbyBypassScope",
  members: LobbyBypassScope
} as EnumTypeConfig<LobbyBypassScope>;