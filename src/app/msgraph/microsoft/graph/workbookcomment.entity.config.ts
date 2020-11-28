import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookComment } from './workbookcomment.entity';
import { WorkbookCommentModel } from './workbookcomment.model';
import { WorkbookCommentCollection } from './workbookcomment.collection';
//#endregion

export const WorkbookCommentConfig = {
  name: "workbookComment",
  base: "microsoft.graph.entity",
  model: WorkbookCommentModel,
  collection: WorkbookCommentCollection,
  annotations: [],
  fields: {
    content: {type: 'Edm.String'},
    contentType: {type: 'Edm.String', nullable: false},
    replies: {type: 'graph.workbookCommentReply', collection: true, navigation: true}
  }
} as EntityConfig<WorkbookComment>;