import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppListType } from './applisttype.enum';
//#endregion

export const AppListTypeConfig = {
  name: "appListType",
  members: AppListType
} as EnumTypeConfig<AppListType>;