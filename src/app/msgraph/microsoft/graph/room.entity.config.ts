import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Room } from './room.entity';
//#endregion

export const RoomConfig = {
  name: "Room",
  base: "microsoft.graph.place",
  annotations: [],
  fields: {
    emailAddress: {type: 'Edm.String'},
    nickname: {type: 'Edm.String', nullable: false},
    building: {type: 'Edm.String'},
    floorNumber: {type: 'Edm.Int32'},
    label: {type: 'Edm.String'},
    capacity: {type: 'Edm.Int32'},
    bookingType: {type: 'graph.bookingType'},
    audioDeviceName: {type: 'Edm.String'},
    videoDeviceName: {type: 'Edm.String'},
    displayDeviceName: {type: 'Edm.String'},
    isWheelChairAccessible: {type: 'Edm.Boolean'},
    tags: {type: 'Edm.String', collection: true},
    floorLabel: {type: 'Edm.String'}
  }
} as EntityConfig<Room>;