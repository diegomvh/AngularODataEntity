import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamGuestSettings } from './teamguestsettings.complex';
import { TeamGuestSettingsModel } from './teamguestsettings.model';
import { TeamGuestSettingsCollection } from './teamguestsettings.collection';
//#endregion

export const TeamGuestSettingsConfig = {
  name: "teamGuestSettings",
  model: TeamGuestSettingsModel,
  collection: TeamGuestSettingsCollection,
  annotations: [],
  fields: {
    allowCreateUpdateChannels: {type: 'Edm.Boolean'},
    allowDeleteChannels: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<TeamGuestSettings>;