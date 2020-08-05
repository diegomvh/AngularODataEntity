import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AttendeeType } from './attendeetype.enum';
//#endregion

export const AttendeeTypeConfig = {
  name: "AttendeeType",
  members: AttendeeType
} as EnumConfig<AttendeeType>;