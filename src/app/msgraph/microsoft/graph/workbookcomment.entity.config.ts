import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookComment } from './workbookcomment.entity';
//#endregion

export const WorkbookCommentConfig = {
  name: "WorkbookComment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    content: {type: 'Edm.String'},
    contentType: {type: 'Edm.String', nullable: false},
    replies: {type: 'graph.workbookCommentReply', collection: true, navigation: true}
  }
} as EntityConfig<WorkbookComment>;