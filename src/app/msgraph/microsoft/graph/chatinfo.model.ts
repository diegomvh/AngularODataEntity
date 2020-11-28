import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChatInfo } from './chatinfo.complex';
import { ChatInfoCollection } from './chatinfo.collection';
//#endregion

export class ChatInfoModel<E extends ChatInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  messageId?: string;
  replyChainMessageId?: string;
  threadId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}