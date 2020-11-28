import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChatMessageAttachment } from './chatmessageattachment.complex';
import { ChatMessageAttachmentModel } from './chatmessageattachment.model';
//#endregion

export class ChatMessageAttachmentCollection<E extends ChatMessageAttachment, M extends ChatMessageAttachmentModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}