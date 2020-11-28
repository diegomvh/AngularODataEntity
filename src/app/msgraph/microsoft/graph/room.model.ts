import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PlaceModel } from './place.model';
import { BookingType } from './bookingtype.enum';
import { Room } from './room.entity';
import { RoomCollection } from './room.collection';
//#endregion

export class RoomModel<E extends Room> extends PlaceModel<E> {
  //#region ODataApi Properties
  audioDeviceName?: string;
  bookingType?: BookingType;
  building?: string;
  capacity?: number;
  displayDeviceName?: string;
  emailAddress?: string;
  floorLabel?: string;
  floorNumber?: number;
  isWheelChairAccessible?: boolean;
  label?: string;
  nickname: string;
  tags?: string[];
  videoDeviceName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}