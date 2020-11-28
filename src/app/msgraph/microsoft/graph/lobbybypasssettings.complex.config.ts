import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { LobbyBypassSettings } from './lobbybypasssettings.complex';
import { LobbyBypassSettingsModel } from './lobbybypasssettings.model';
import { LobbyBypassSettingsCollection } from './lobbybypasssettings.collection';
//#endregion

export const LobbyBypassSettingsConfig = {
  name: "lobbyBypassSettings",
  model: LobbyBypassSettingsModel,
  collection: LobbyBypassSettingsCollection,
  annotations: [],
  fields: {
    isDialInBypassEnabled: {type: 'Edm.Boolean'},
    scope: {type: 'graph.lobbyBypassScope'}
  }
} as StructuredTypeConfig<LobbyBypassSettings>;