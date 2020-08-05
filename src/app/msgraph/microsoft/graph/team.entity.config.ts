import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Team } from './team.entity';
//#endregion

export const TeamConfig = {
  name: "Team",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    internalId: {type: 'Edm.String'},
    classification: {type: 'Edm.String'},
    specialization: {type: 'graph.teamSpecialization'},
    visibility: {type: 'graph.teamVisibilityType'},
    webUrl: {type: 'Edm.String'},
    memberSettings: {type: 'graph.teamMemberSettings'},
    guestSettings: {type: 'graph.teamGuestSettings'},
    messagingSettings: {type: 'graph.teamMessagingSettings'},
    funSettings: {type: 'graph.teamFunSettings'},
    isArchived: {type: 'Edm.Boolean'},
    schedule: {type: 'graph.schedule', navigation: true},
    group: {type: 'graph.group', navigation: true},
    template: {type: 'graph.teamsTemplate', navigation: true},
    members: {type: 'graph.conversationMember', collection: true, navigation: true},
    channels: {type: 'graph.channel', collection: true, navigation: true},
    primaryChannel: {type: 'graph.channel', navigation: true},
    installedApps: {type: 'graph.teamsAppInstallation', collection: true, navigation: true},
    operations: {type: 'graph.teamsAsyncOperation', collection: true, navigation: true}
  }
} as EntityConfig<Team>;