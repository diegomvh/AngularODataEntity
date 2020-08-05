import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { SafeSearchFilterType } from './safesearchfiltertype.enum';
//#endregion

export const SafeSearchFilterTypeConfig = {
  name: "SafeSearchFilterType",
  members: SafeSearchFilterType
} as EnumConfig<SafeSearchFilterType>;