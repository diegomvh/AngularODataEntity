import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Place } from './place.entity';
import { BookingType } from './bookingtype.enum';
import { PlaceModel } from './place.model';
import { PlaceCollection } from './place.collection';
//#endregion

export interface Room extends Place {
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
}