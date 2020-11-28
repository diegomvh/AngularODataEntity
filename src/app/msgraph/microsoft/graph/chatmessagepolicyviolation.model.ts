import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChatMessagePolicyViolationDlpActionTypes } from './chatmessagepolicyviolationdlpactiontypes.enum';
import { ChatMessagePolicyViolationUserActionTypes } from './chatmessagepolicyviolationuseractiontypes.enum';
import { ChatMessagePolicyViolationVerdictDetailsTypes } from './chatmessagepolicyviolationverdictdetailstypes.enum';
import { ChatMessagePolicyViolation } from './chatmessagepolicyviolation.entity';
import { ChatMessagePolicyViolationPolicyTip } from './chatmessagepolicyviolationpolicytip.entity';
import { ChatMessagePolicyViolationPolicyTipModel } from './chatmessagepolicyviolationpolicytip.model';
import { ChatMessagePolicyViolationCollection } from './chatmessagepolicyviolation.collection';
import { ChatMessagePolicyViolationPolicyTipCollection } from './chatmessagepolicyviolationpolicytip.collection';
//#endregion

export class ChatMessagePolicyViolationModel<E extends ChatMessagePolicyViolation> extends ODataModel<E> {
  //#region ODataApi Properties
  dlpAction?: ChatMessagePolicyViolationDlpActionTypes;
  justificationText?: string;
  policyTip?: ChatMessagePolicyViolationPolicyTipModel<ChatMessagePolicyViolationPolicyTip>;
  userAction?: ChatMessagePolicyViolationUserActionTypes;
  verdictDetails?: ChatMessagePolicyViolationVerdictDetailsTypes;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}