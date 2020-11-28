import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlaceCollection } from './place.collection';
import { Room } from './room.entity';
import { RoomList } from './roomlist.entity';
import { RoomModel } from './room.model';
import { RoomListModel } from './roomlist.model';
import { RoomCollection } from './room.collection';
//#endregion

export class RoomListCollection<E extends RoomList, M extends RoomListModel<E>> extends PlaceCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}