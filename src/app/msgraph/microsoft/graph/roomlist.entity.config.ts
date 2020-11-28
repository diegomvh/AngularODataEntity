import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RoomList } from './roomlist.entity';
import { RoomListModel } from './roomlist.model';
import { RoomListCollection } from './roomlist.collection';
//#endregion

export const RoomListConfig = {
  name: "roomList",
  base: "microsoft.graph.place",
  model: RoomListModel,
  collection: RoomListCollection,
  annotations: [],
  fields: {
    emailAddress: {type: 'Edm.String'},
    rooms: {type: 'graph.room', collection: true, navigation: true}
  }
} as StructuredTypeConfig<RoomList>;