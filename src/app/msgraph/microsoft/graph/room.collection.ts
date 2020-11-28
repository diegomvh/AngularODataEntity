import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlaceCollection } from './place.collection';
import { BookingType } from './bookingtype.enum';
import { Room } from './room.entity';
import { RoomModel } from './room.model';
//#endregion

export class RoomCollection<E extends Room, M extends RoomModel<E>> extends PlaceCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}