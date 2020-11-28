import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface CategoryGroup {
  //#region ODataApi Properties
  ID: number;
  DimensionKey?: string;
  Title?: string;
  Description?: string;
  ParentID?: number;
  //#endregion
}