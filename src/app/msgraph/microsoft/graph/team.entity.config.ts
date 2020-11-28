import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Team } from './team.entity';
import { TeamModel } from './team.model';
import { TeamCollection } from './team.collection';
//#endregion

export const TeamConfig = {
  name: "team",
  base: "microsoft.graph.entity",
  open: true,
  model: TeamModel,
  collection: TeamCollection,
  annotations: [],
  fields: {
    classification: {type: 'Edm.String'},
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    funSettings: {type: 'graph.teamFunSettings'},
    guestSettings: {type: 'graph.teamGuestSettings'},
    internalId: {type: 'Edm.String'},
    isArchived: {type: 'Edm.Boolean'},
    memberSettings: {type: 'graph.teamMemberSettings'},
    messagingSettings: {type: 'graph.teamMessagingSettings'},
    specialization: {type: 'graph.teamSpecialization'},
    visibility: {type: 'graph.teamVisibilityType'},
    webUrl: {type: 'Edm.String'},
    schedule: {type: 'graph.schedule', navigation: true},
    channels: {type: 'graph.channel', collection: true, navigation: true},
    group: {type: 'graph.group', navigation: true},
    installedApps: {type: 'graph.teamsAppInstallation', collection: true, navigation: true},
    members: {type: 'graph.conversationMember', collection: true, navigation: true},
    operations: {type: 'graph.teamsAsyncOperation', collection: true, navigation: true},
    primaryChannel: {type: 'graph.channel', navigation: true},
    template: {type: 'graph.teamsTemplate', navigation: true}
  }
} as EntityConfig<Team>;