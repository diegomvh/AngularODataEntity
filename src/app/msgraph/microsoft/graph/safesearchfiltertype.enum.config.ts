import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { SafeSearchFilterType } from './safesearchfiltertype.enum';
//#endregion

export const SafeSearchFilterTypeConfig = {
  name: "safeSearchFilterType",
  members: SafeSearchFilterType
} as EnumConfig<SafeSearchFilterType>;