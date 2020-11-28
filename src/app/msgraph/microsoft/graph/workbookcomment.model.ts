import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookComment } from './workbookcomment.entity';
import { WorkbookCommentReply } from './workbookcommentreply.entity';
import { WorkbookCommentReplyModel } from './workbookcommentreply.model';
import { WorkbookCommentCollection } from './workbookcomment.collection';
import { WorkbookCommentReplyCollection } from './workbookcommentreply.collection';
//#endregion

export class WorkbookCommentModel<E extends WorkbookComment> extends EntityModel<E> {
  //#region ODataApi Properties
  content?: string;
  contentType: string;
  replies?: WorkbookCommentReplyCollection<WorkbookCommentReply, WorkbookCommentReplyModel<WorkbookCommentReply>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}