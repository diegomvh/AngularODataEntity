import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamMemberSettings } from './teammembersettings.entity';
//#endregion

export const TeamMemberSettingsConfig = {
  name: "teamMemberSettings",
  annotations: [],
  fields: {
    allowCreateUpdateChannels: {type: 'Edm.Boolean'},
    allowDeleteChannels: {type: 'Edm.Boolean'},
    allowAddRemoveApps: {type: 'Edm.Boolean'},
    allowCreateUpdateRemoveTabs: {type: 'Edm.Boolean'},
    allowCreateUpdateRemoveConnectors: {type: 'Edm.Boolean'}
  }
} as EntityConfig<TeamMemberSettings>;