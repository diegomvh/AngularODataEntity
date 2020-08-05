import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WeekIndex } from './weekindex.enum';
//#endregion

export const WeekIndexConfig = {
  name: "weekIndex",
  members: WeekIndex
} as EnumConfig<WeekIndex>;