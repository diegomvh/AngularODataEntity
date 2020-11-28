import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlaceModel } from './place.model';
import { Room } from './room.entity';
import { RoomList } from './roomlist.entity';
import { RoomModel } from './room.model';
import { RoomCollection } from './room.collection';
import { RoomListCollection } from './roomlist.collection';
//#endregion

export class RoomListModel<E extends RoomList> extends PlaceModel<E> {
  //#region ODataApi Properties
  emailAddress?: string;
  rooms?: RoomCollection<Room, RoomModel<Room>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}