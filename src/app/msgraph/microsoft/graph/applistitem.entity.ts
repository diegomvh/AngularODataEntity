import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface AppListItem {
  //#region ODataApi Properties
  appId?: string;
  appStoreUrl?: string;
  name: string;
  publisher?: string;
  //#endregion
}