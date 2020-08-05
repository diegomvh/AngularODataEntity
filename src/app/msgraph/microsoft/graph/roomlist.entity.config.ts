import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RoomList } from './roomlist.entity';
//#endregion

export const RoomListConfig = {
  name: "roomList",
  base: "microsoft.graph.place",
  annotations: [],
  fields: {
    emailAddress: {type: 'Edm.String'},
    rooms: {type: 'graph.room', collection: true, navigation: true}
  }
} as EntityConfig<RoomList>;