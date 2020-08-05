import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { BookingType } from './bookingtype.enum';
//#endregion

export const BookingTypeConfig = {
  name: "BookingType",
  members: BookingType
} as EnumConfig<BookingType>;