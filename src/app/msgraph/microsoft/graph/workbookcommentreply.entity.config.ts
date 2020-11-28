import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookCommentReply } from './workbookcommentreply.entity';
import { WorkbookCommentReplyModel } from './workbookcommentreply.model';
import { WorkbookCommentReplyCollection } from './workbookcommentreply.collection';
//#endregion

export const WorkbookCommentReplyConfig = {
  name: "workbookCommentReply",
  base: "microsoft.graph.entity",
  model: WorkbookCommentReplyModel,
  collection: WorkbookCommentReplyCollection,
  annotations: [],
  fields: {
    content: {type: 'Edm.String'},
    contentType: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<WorkbookCommentReply>;