import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttendeeType } from './attendeetype.enum';
//#endregion

export const AttendeeTypeConfig = {
  name: "attendeeType",
  members: AttendeeType
} as EnumTypeConfig<AttendeeType>;