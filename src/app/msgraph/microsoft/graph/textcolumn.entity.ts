import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface TextColumn {
  //#region ODataApi Properties
  allowMultipleLines?: boolean;
  appendChangesToExistingText?: boolean;
  linesForEditing?: number;
  maxLength?: number;
  textType?: string;
  //#endregion
}