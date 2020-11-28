import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePatchActionType } from './onenotepatchactiontype.enum';
import { OnenotePatchInsertPosition } from './onenotepatchinsertposition.enum';
//#endregion

export interface OnenotePatchContentCommand {
  //#region ODataApi Properties
  action: OnenotePatchActionType;
  content?: string;
  position?: OnenotePatchInsertPosition;
  target: string;
  //#endregion
}