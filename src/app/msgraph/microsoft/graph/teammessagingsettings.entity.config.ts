import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeamMessagingSettings } from './teammessagingsettings.entity';
//#endregion

export const TeamMessagingSettingsConfig = {
  name: "teamMessagingSettings",
  annotations: [],
  fields: {
    allowUserEditMessages: {type: 'Edm.Boolean'},
    allowUserDeleteMessages: {type: 'Edm.Boolean'},
    allowOwnerDeleteMessages: {type: 'Edm.Boolean'},
    allowTeamMentions: {type: 'Edm.Boolean'},
    allowChannelMentions: {type: 'Edm.Boolean'}
  }
} as EntityConfig<TeamMessagingSettings>;