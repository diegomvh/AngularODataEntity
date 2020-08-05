import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface AppListItem {
  //#region ODataApi Properties
  name: string;
  publisher?: string;
  appStoreUrl?: string;
  appId?: string;
  //#endregion
}