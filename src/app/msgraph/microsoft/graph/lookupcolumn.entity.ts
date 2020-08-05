import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface LookupColumn {
  //#region ODataApi Properties
  allowMultipleValues?: boolean;
  allowUnlimitedLength?: boolean;
  columnName?: string;
  listId?: string;
  primaryLookupColumnId?: string;
  //#endregion
}