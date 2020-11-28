import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookCommentReply } from './workbookcommentreply.entity';
import { WorkbookCommentReplyCollection } from './workbookcommentreply.collection';
//#endregion

export class WorkbookCommentReplyModel<E extends WorkbookCommentReply> extends EntityModel<E> {
  //#region ODataApi Properties
  content?: string;
  contentType: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}