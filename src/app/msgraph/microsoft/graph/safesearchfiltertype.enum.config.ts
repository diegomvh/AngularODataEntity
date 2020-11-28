import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SafeSearchFilterType } from './safesearchfiltertype.enum';
//#endregion

export const SafeSearchFilterTypeConfig = {
  name: "safeSearchFilterType",
  members: SafeSearchFilterType
} as EnumTypeConfig<SafeSearchFilterType>;