import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookCommentReply } from './workbookcommentreply.entity';
import { EntityModel } from './entity.model';
import { WorkbookCommentReplyModel } from './workbookcommentreply.model';
import { EntityCollection } from './entity.collection';
import { WorkbookCommentReplyCollection } from './workbookcommentreply.collection';
//#endregion

export interface WorkbookComment extends Entity {
  //#region ODataApi Properties
  content?: string;
  contentType: string;
  replies?: WorkbookCommentReply[];
  //#endregion
}