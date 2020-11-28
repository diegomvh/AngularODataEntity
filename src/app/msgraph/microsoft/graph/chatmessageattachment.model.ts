import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChatMessageAttachment } from './chatmessageattachment.entity';
import { ChatMessageAttachmentCollection } from './chatmessageattachment.collection';
//#endregion

export class ChatMessageAttachmentModel<E extends ChatMessageAttachment> extends ODataModel<E> {
  //#region ODataApi Properties
  content?: string;
  contentType?: string;
  contentUrl?: string;
  id?: string;
  name?: string;
  thumbnailUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}