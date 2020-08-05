import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamGuestSettings } from './teamguestsettings.entity';
//#endregion

export const TeamGuestSettingsConfig = {
  name: "TeamGuestSettings",
  annotations: [],
  fields: {
    allowCreateUpdateChannels: {type: 'Edm.Boolean'},
    allowDeleteChannels: {type: 'Edm.Boolean'}
  }
} as EntityConfig<TeamGuestSettings>;