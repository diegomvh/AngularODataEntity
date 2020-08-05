import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Place } from './place.entity';
import { Room } from './room.entity';
//#endregion

export interface RoomList extends Place {
  //#region ODataApi Properties
  emailAddress?: string;
  rooms?: Room[];
  //#endregion
}