import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamMemberSettings } from './teammembersettings.entity';
import { TeamMemberSettingsModel } from './teammembersettings.model';
import { TeamMemberSettingsCollection } from './teammembersettings.collection';
//#endregion

export const TeamMemberSettingsConfig = {
  name: "teamMemberSettings",
  model: TeamMemberSettingsModel,
  collection: TeamMemberSettingsCollection,
  annotations: [],
  fields: {
    allowAddRemoveApps: {type: 'Edm.Boolean'},
    allowCreatePrivateChannels: {type: 'Edm.Boolean'},
    allowCreateUpdateChannels: {type: 'Edm.Boolean'},
    allowCreateUpdateRemoveConnectors: {type: 'Edm.Boolean'},
    allowCreateUpdateRemoveTabs: {type: 'Edm.Boolean'},
    allowDeleteChannels: {type: 'Edm.Boolean'}
  }
} as EntityConfig<TeamMemberSettings>;