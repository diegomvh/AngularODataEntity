import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookCommentReply } from './workbookcommentreply.entity';
//#endregion

export interface WorkbookComment extends Entity {
  //#region ODataApi Properties
  content?: string;
  contentType: string;
  replies?: WorkbookCommentReply[];
  //#endregion
}