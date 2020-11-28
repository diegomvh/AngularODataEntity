import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Room } from './room.entity';
import { RoomModel } from './room.model';
import { RoomCollection } from './room.collection';
//#endregion

export const RoomConfig = {
  name: "room",
  base: "microsoft.graph.place",
  model: RoomModel,
  collection: RoomCollection,
  annotations: [],
  fields: {
    audioDeviceName: {type: 'Edm.String'},
    bookingType: {type: 'graph.bookingType'},
    building: {type: 'Edm.String'},
    capacity: {type: 'Edm.Int32'},
    displayDeviceName: {type: 'Edm.String'},
    emailAddress: {type: 'Edm.String'},
    floorLabel: {type: 'Edm.String'},
    floorNumber: {type: 'Edm.Int32'},
    isWheelChairAccessible: {type: 'Edm.Boolean'},
    label: {type: 'Edm.String'},
    nickname: {type: 'Edm.String', nullable: false},
    tags: {type: 'Edm.String', collection: true},
    videoDeviceName: {type: 'Edm.String'}
  }
} as EntityConfig<Room>;