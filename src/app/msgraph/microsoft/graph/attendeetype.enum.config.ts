import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttendeeType } from './attendeetype.enum';
//#endregion

export const AttendeeTypeConfig = {
  name: "attendeeType",
  members: AttendeeType
} as EnumConfig<AttendeeType>;