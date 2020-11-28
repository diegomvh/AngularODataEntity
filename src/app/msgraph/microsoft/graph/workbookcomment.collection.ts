import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookComment } from './workbookcomment.entity';
import { WorkbookCommentReply } from './workbookcommentreply.entity';
import { WorkbookCommentModel } from './workbookcomment.model';
import { WorkbookCommentReplyModel } from './workbookcommentreply.model';
import { WorkbookCommentReplyCollection } from './workbookcommentreply.collection';
//#endregion

export class WorkbookCommentCollection<E extends WorkbookComment, M extends WorkbookCommentModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}