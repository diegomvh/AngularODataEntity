import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeOffReasonIconType } from './timeoffreasonicontype.enum';
//#endregion

export const TimeOffReasonIconTypeConfig = {
  name: "timeOffReasonIconType",
  members: TimeOffReasonIconType
} as EnumTypeConfig<TimeOffReasonIconType>;