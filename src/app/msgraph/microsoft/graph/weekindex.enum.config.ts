import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WeekIndex } from './weekindex.enum';
//#endregion

export const WeekIndexConfig = {
  name: "weekIndex",
  members: WeekIndex
} as EnumTypeConfig<WeekIndex>;