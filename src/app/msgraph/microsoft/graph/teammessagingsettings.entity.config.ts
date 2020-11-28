import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamMessagingSettings } from './teammessagingsettings.entity';
import { TeamMessagingSettingsModel } from './teammessagingsettings.model';
import { TeamMessagingSettingsCollection } from './teammessagingsettings.collection';
//#endregion

export const TeamMessagingSettingsConfig = {
  name: "teamMessagingSettings",
  model: TeamMessagingSettingsModel,
  collection: TeamMessagingSettingsCollection,
  annotations: [],
  fields: {
    allowChannelMentions: {type: 'Edm.Boolean'},
    allowOwnerDeleteMessages: {type: 'Edm.Boolean'},
    allowTeamMentions: {type: 'Edm.Boolean'},
    allowUserDeleteMessages: {type: 'Edm.Boolean'},
    allowUserEditMessages: {type: 'Edm.Boolean'}
  }
} as EntityConfig<TeamMessagingSettings>;