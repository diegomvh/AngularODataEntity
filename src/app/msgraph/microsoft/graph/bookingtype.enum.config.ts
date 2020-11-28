import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { BookingType } from './bookingtype.enum';
//#endregion

export const BookingTypeConfig = {
  name: "bookingType",
  members: BookingType
} as EnumTypeConfig<BookingType>;