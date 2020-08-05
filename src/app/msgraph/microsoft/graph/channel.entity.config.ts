import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Channel } from './channel.entity';
//#endregion

export const ChannelConfig = {
  name: "channel",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    description: {type: 'Edm.String'},
    email: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'},
    messages: {type: 'graph.chatMessage', collection: true, navigation: true},
    tabs: {type: 'graph.teamsTab', collection: true, navigation: true},
    filesFolder: {type: 'graph.driveItem', navigation: true}
  }
} as EntityConfig<Channel>;