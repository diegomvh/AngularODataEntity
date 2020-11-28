import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface IncompleteData {
  //#region ODataApi Properties
  missingDataBeforeDateTime?: Date;
  wasThrottled?: boolean;
  //#endregion
}