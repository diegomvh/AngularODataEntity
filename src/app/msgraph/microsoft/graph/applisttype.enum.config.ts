import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppListType } from './applisttype.enum';
//#endregion

export const AppListTypeConfig = {
  name: "AppListType",
  members: AppListType
} as EnumConfig<AppListType>;