import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Place } from './place.entity';
import { Room } from './room.entity';
import { PlaceModel } from './place.model';
import { RoomModel } from './room.model';
import { PlaceCollection } from './place.collection';
import { RoomCollection } from './room.collection';
//#endregion

export interface RoomList extends Place {
  //#region ODataApi Properties
  emailAddress?: string;
  rooms?: Room[];
  //#endregion
}