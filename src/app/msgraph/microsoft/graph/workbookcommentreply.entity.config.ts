import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookCommentReply } from './workbookcommentreply.entity';
//#endregion

export const WorkbookCommentReplyConfig = {
  name: "WorkbookCommentReply",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    content: {type: 'Edm.String'},
    contentType: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<WorkbookCommentReply>;