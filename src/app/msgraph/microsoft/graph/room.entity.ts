import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Place } from './place.entity';
import { BookingType } from './bookingtype.enum';
//#endregion

export interface Room extends Place {
  //#region ODataApi Properties
  emailAddress?: string;
  nickname: string;
  building?: string;
  floorNumber?: number;
  label?: string;
  capacity?: number;
  bookingType?: BookingType;
  audioDeviceName?: string;
  videoDeviceName?: string;
  displayDeviceName?: string;
  isWheelChairAccessible?: boolean;
  tags?: string[];
  floorLabel?: string;
  //#endregion
}