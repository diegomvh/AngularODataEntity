import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChatMessagePolicyViolationPolicyTip } from './chatmessagepolicyviolationpolicytip.entity';
import { ChatMessagePolicyViolationPolicyTipModel } from './chatmessagepolicyviolationpolicytip.model';
//#endregion

export class ChatMessagePolicyViolationPolicyTipCollection<E extends ChatMessagePolicyViolationPolicyTip, M extends ChatMessagePolicyViolationPolicyTipModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}