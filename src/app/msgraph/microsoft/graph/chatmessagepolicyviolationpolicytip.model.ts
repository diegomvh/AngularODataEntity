import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChatMessagePolicyViolationPolicyTip } from './chatmessagepolicyviolationpolicytip.entity';
import { ChatMessagePolicyViolationPolicyTipCollection } from './chatmessagepolicyviolationpolicytip.collection';
//#endregion

export class ChatMessagePolicyViolationPolicyTipModel<E extends ChatMessagePolicyViolationPolicyTip> extends ODataModel<E> {
  //#region ODataApi Properties
  complianceUrl?: string;
  generalText?: string;
  matchedConditionDescriptions?: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}