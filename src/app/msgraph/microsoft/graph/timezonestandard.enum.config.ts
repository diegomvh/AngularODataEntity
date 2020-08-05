import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeZoneStandard } from './timezonestandard.enum';
//#endregion

export const TimeZoneStandardConfig = {
  name: "timeZoneStandard",
  members: TimeZoneStandard
} as EnumConfig<TimeZoneStandard>;