import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChatMessagePolicyViolationDlpActionTypes } from './chatmessagepolicyviolationdlpactiontypes.enum';
import { ChatMessagePolicyViolationUserActionTypes } from './chatmessagepolicyviolationuseractiontypes.enum';
import { ChatMessagePolicyViolationVerdictDetailsTypes } from './chatmessagepolicyviolationverdictdetailstypes.enum';
import { ChatMessagePolicyViolation } from './chatmessagepolicyviolation.complex';
import { ChatMessagePolicyViolationPolicyTip } from './chatmessagepolicyviolationpolicytip.complex';
import { ChatMessagePolicyViolationModel } from './chatmessagepolicyviolation.model';
import { ChatMessagePolicyViolationPolicyTipModel } from './chatmessagepolicyviolationpolicytip.model';
import { ChatMessagePolicyViolationPolicyTipCollection } from './chatmessagepolicyviolationpolicytip.collection';
//#endregion

export class ChatMessagePolicyViolationCollection<E extends ChatMessagePolicyViolation, M extends ChatMessagePolicyViolationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}