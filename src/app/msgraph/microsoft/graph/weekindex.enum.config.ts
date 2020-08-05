import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WeekIndex } from './weekindex.enum';
//#endregion

export const WeekIndexConfig = {
  name: "WeekIndex",
  members: WeekIndex
} as EnumConfig<WeekIndex>;