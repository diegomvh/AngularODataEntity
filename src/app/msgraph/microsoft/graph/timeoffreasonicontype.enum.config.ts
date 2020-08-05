import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOffReasonIconType } from './timeoffreasonicontype.enum';
//#endregion

export const TimeOffReasonIconTypeConfig = {
  name: "TimeOffReasonIconType",
  members: TimeOffReasonIconType
} as EnumConfig<TimeOffReasonIconType>;