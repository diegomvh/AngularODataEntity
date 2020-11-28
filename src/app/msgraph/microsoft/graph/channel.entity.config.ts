import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Channel } from './channel.entity';
import { ChannelModel } from './channel.model';
import { ChannelCollection } from './channel.collection';
//#endregion

export const ChannelConfig = {
  name: "channel",
  base: "microsoft.graph.entity",
  model: ChannelModel,
  collection: ChannelCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    email: {type: 'Edm.String'},
    isFavoriteByDefault: {type: 'Edm.Boolean'},
    membershipType: {type: 'graph.channelMembershipType'},
    webUrl: {type: 'Edm.String'},
    filesFolder: {type: 'graph.driveItem', navigation: true},
    members: {type: 'graph.conversationMember', collection: true, navigation: true},
    messages: {type: 'graph.chatMessage', collection: true, navigation: true},
    tabs: {type: 'graph.teamsTab', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Channel>;