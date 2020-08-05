import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface WorkbookCommentReply extends Entity {
  //#region ODataApi Properties
  content?: string;
  contentType: string;
  //#endregion
}