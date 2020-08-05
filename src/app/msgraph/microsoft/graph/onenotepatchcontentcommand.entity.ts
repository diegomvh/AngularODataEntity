import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenotePatchInsertPosition } from './onenotepatchinsertposition.enum';
import { OnenotePatchActionType } from './onenotepatchactiontype.enum';
//#endregion

export interface OnenotePatchContentCommand {
  //#region ODataApi Properties
  action: OnenotePatchActionType;
  target: string;
  content?: string;
  position?: OnenotePatchInsertPosition;
  //#endregion
}