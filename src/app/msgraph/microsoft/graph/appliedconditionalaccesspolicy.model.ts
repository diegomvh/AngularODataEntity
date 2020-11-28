import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppliedConditionalAccessPolicyResult } from './appliedconditionalaccesspolicyresult.enum';
import { AppliedConditionalAccessPolicy } from './appliedconditionalaccesspolicy.complex';
import { AppliedConditionalAccessPolicyCollection } from './appliedconditionalaccesspolicy.collection';
//#endregion

export class AppliedConditionalAccessPolicyModel<E extends AppliedConditionalAccessPolicy> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  enforcedGrantControls?: string[];
  enforcedSessionControls?: string[];
  id?: string;
  result?: AppliedConditionalAccessPolicyResult;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}